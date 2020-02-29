import React, { useState } from "react";

import { CssBaseline } from "@material-ui/core";

import ApiService from "../../services/api-service";
import ApplicationBar from "../AppBar/ApplicationBar";
import StudentsTable from "../StudentsTable/StudentsTable";
import CreateStudent from "../CreateStudent/CreateStudent";
import createForm from "../hoc-helpers/createForm";

const App = () => {
	const [tableShow, setTableShow] = useState(true);
	const [data, setData] = useState([]);

	const apiService = new ApiService();

	const updateData = async () => {
		const result = await apiService.getAllStudents();
		setData(result.data);
	};

	const handleSwitch = evt => {
		switch (evt.currentTarget.id) {
			case "createStudent":
				setTableShow(false);
				break;
			default:
				setTableShow(true);
				break;
		}
	};

	const CreateStudentForm = createForm(
		<CreateStudent />,
		apiService,
		updateData
	);

	return (
		<>
			<CssBaseline />
			<ApplicationBar handleSwitch={handleSwitch} />
			{tableShow ? (
				<StudentsTable
					data={data}
					updateData={updateData}
					apiService={apiService}
				/>
			) : (
				<CreateStudentForm />
			)}
		</>
	);
};

export default App;
