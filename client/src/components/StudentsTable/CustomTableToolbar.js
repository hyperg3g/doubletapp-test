import React, { useState } from "react";

import { Typography, Toolbar, Tooltip, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

import AddDialog from "../AddDialog/AddDialog";
import createForm from "../hoc-helpers/createForm";

const useStyles = makeStyles(theme => ({
	title: {
		flex: "1 1 100%"
	}
}));

const CustomTableToolbar = props => {
	const { numSelected, handleDelete, updateData, apiService } = props;
	const [openDialog, setOpenDialog] = useState(false);
	const classes = useStyles();

	const handleOpen = () => setOpenDialog(true);
	const handleClose = () => setOpenDialog(false);

	const AddDialogWithProps = (
		<AddDialog opened={openDialog} handleClose={handleClose} />
	);
	const AddDialogForm = createForm(
		AddDialogWithProps,
		apiService,
		updateData
	);

	const toolbarItems = num => {
		if (num > 0) {
			return (
				<>
					<Typography variant="h6" className={classes.title}>
						{numSelected} selected
					</Typography>
					<Tooltip title="Delete">
						<Fab
							color="secondary"
							size="small"
							onClick={handleDelete}
						>
							<DeleteIcon />
						</Fab>
					</Tooltip>
				</>
			);
		} else {
			return (
				<>
					<Typography variant="h6" className={classes.title}>
						Students list
					</Typography>
					<Tooltip title="Add new">
						<Fab color="primary" size="small" onClick={handleOpen}>
							<AddIcon />
						</Fab>
					</Tooltip>
					<AddDialogForm />
				</>
			);
		}
	};

	return <Toolbar>{toolbarItems(numSelected)}</Toolbar>;
};

export default CustomTableToolbar;
