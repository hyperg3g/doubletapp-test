import React from "react";

import {
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
	DialogActions,
	Button
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const AddDialog = props => {
	const {
		opened,
		handleClose,
		handleInput,
		handleCreate,
		formData,
		validationProps
	} = props;

	return (
		<Dialog open={opened ? opened : false}>
			<DialogTitle>Add new student</DialogTitle>
			<ValidatorForm
				onSubmit={evt => {
					handleCreate(evt);
					handleClose();
				}}
			>
				<DialogContent>
					<DialogContentText>
						Fill form below to add new student
					</DialogContentText>
					<TextValidator
						required
						fullWidth
						margin="normal"
						placeholder="Ivan"
						id="name"
						label="Student name"
						type="text"
						value={formData.name}
						onChange={handleInput}
						validators={validationProps.textRules}
						errorMessages={validationProps.textErrorMessages}
					/>
					<TextValidator
						required
						fullWidth
						margin="normal"
						placeholder="Doubletappov"
						id="surname"
						label="Student surname"
						type="text"
						value={formData.surname}
						onChange={handleInput}
						validators={validationProps.textRules}
						errorMessages={validationProps.textErrorMessages}
					/>
					<TextValidator
						required
						fullWidth
						margin="normal"
						id="rating"
						label="Student rating"
						type="number"
						value={formData.rating}
						onChange={handleInput}
						validators={validationProps.numberRules}
						errorMessages={validationProps.numberErrorMessages}
					/>
				</DialogContent>
				<DialogActions>
					<Button color="primary" onClick={handleClose}>
						Cancel
					</Button>
					<Button color="primary" type="submit">
						Create
					</Button>
				</DialogActions>
			</ValidatorForm>
		</Dialog>
	);
};

export default AddDialog;
