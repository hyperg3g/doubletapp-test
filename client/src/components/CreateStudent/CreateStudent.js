import React from "react";

import { Paper, Typography, Button, Grid } from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {
		padding: "20px"
	},
	grid: {
		minHeight: 300,
		justifyContent: "space-between",
		flexDirection: "column"
	}
});

const CreateStudent = props => {
	const { handleCreate, handleInput, formData, validationProps } = props;
	const classes = useStyles();

	return (
		<Paper className={classes.root}>
			<Typography variant="h6" gutterBottom>
				Create student
			</Typography>
			<ValidatorForm onSubmit={handleCreate}>
				<Grid container className={classes.grid}>
					<Grid item>
						<TextValidator
							required
							fullWidth
							variant="outlined"
							placeholder="Ivan"
							id="name"
							label="Student name"
							type="text"
							value={formData.name}
							onChange={handleInput}
							validators={validationProps.textRules}
							errorMessages={validationProps.textErrorMessages}
						/>
					</Grid>
					<Grid item>
						<TextValidator
							required
							fullWidth
							variant="outlined"
							placeholder="Doubletappov"
							id="surname"
							label="Student surname"
							type="text"
							value={formData.surname}
							onChange={handleInput}
							validators={validationProps.textRules}
							errorMessages={validationProps.textErrorMessages}
						/>
					</Grid>
					<Grid item>
						<TextValidator
							required
							fullWidth
							variant="outlined"
							id="rating"
							label="Student rating"
							type="text"
							value={formData.rating}
							onChange={handleInput}
							validators={validationProps.numberRules}
							errorMessages={validationProps.numberErrorMessages}
						/>
					</Grid>
					<Grid item>
						<Button
							color="primary"
							variant="contained"
							size="large"
							type="submit"
						>
							Create
						</Button>
					</Grid>
				</Grid>
			</ValidatorForm>
		</Paper>
	);
};

export default CreateStudent;
