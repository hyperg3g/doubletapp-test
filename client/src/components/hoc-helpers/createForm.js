import React, { useState } from "react";

const createForm = (Component, api, updateDataFunc) => {
	return () => {
		const [formData, setFormData] = useState({
			name: "",
			surname: "",
			rating: 0
		});

		const FormView = Component.type;

		const validationProps = {
			textRules: [
				"required",
				"matchRegexp:^[а-яА-Яa-zA-Z]*$",
				"minStringLength: 3"
			],
			textErrorMessages: [
				"Field is required",
				"Invalid enrty",
				"Minimum 3 characters long"
			],
			numberRules: ["isNumber", "isPositive"],
			numberErrorMessages: ["Invalid number", "Must be positive"]
		};

		const handleInput = evt => {
			evt.persist();
			setFormData(prevState => {
				return {
					...prevState,
					[evt.target.id]: parseInt(evt.target.value)
						? parseInt(evt.target.value)
						: evt.target.value
				};
			});
		};

		const handleCreate = async evt => {
			evt.preventDefault();
			await api.createStudent(formData).then(() => {
				updateDataFunc();
			});
		};

		return (
			<FormView
				{...Component.props}
				handleInput={handleInput}
				handleCreate={handleCreate}
				formData={formData}
				validationProps={validationProps}
			/>
		);
	};
};

export default createForm;
