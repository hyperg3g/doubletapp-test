import React, { useState } from "react";

import { TableContainer, Table, Paper } from "@material-ui/core";

import CustomTableToolbar from "./CustomTableToolbar";
import CustomTableHead from "./CustomTableHead";
import CustomTableBody from "./CustomTableBody";

const StudentsTable = props => {
	const [selected, setSelected] = useState([]);
	const [selectedAll, setSelectedAll] = useState(false);
	const { data, updateData, apiService } = props;

	const handleSelectAll = evt => {
		if (evt.target.checked) {
			const newSelected = data.map(item => item._id);

			setSelected(newSelected);
			setSelectedAll(true);
		} else {
			setSelected([]);
			setSelectedAll(false);
		}
	};

	const handleSelect = evt => {
		if (evt.target.checked) {
			setSelected(prevState => {
				return [...prevState, evt.target.id];
			});
		} else {
			setSelected(prevState => {
				let idx = prevState.indexOf(evt.target.id);
				let newState = [
					...prevState.slice(0, idx),
					...prevState.slice(idx + 1)
				];
				return newState;
			});
		}
	};

	const handleDelete = async () => {
		if (selected.length === 1) {
			await apiService.deleteStudent(selected[0]).then(() => {
				setSelected([]);
				updateData();
			});
		} else {
			await apiService.deleteStudents(selected).then(() => {
				setSelected([]);
				setSelectedAll(false);
				updateData();
			});
		}
	};

	return (
		<Paper>
			<CustomTableToolbar
				numSelected={selected.length}
				handleDelete={handleDelete}
				updateData={updateData}
				apiService={apiService}
			/>
			<TableContainer>
				<Table>
					<CustomTableHead
						handleSelectAll={handleSelectAll}
						isSelected={selectedAll}
					/>
					<CustomTableBody
						handleSelect={handleSelect}
						data={data}
						updateData={updateData}
						selected={selected}
					/>
				</Table>
			</TableContainer>
		</Paper>
	);
};

export default StudentsTable;
