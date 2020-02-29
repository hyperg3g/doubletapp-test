import React, { useEffect } from "react";

import { TableBody, TableRow, TableCell, Checkbox } from "@material-ui/core";

const CustomTableBody = props => {
	const { handleSelect, data, updateData, selected } = props;

	useEffect(() => {
		updateData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const bodyElements = data.map(dataItem => {
		const isSelected = selected.indexOf(dataItem._id) !== -1;

		return (
			<TableRow hover key={dataItem._id}>
				<TableCell padding="checkbox">
					<Checkbox
						id={dataItem._id}
						checked={isSelected}
						onChange={handleSelect}
					/>
				</TableCell>
				<TableCell>{dataItem._id}</TableCell>
				<TableCell>{dataItem.name}</TableCell>
				<TableCell>{dataItem.surname}</TableCell>
				<TableCell>{dataItem.rating}</TableCell>
			</TableRow>
		);
	});

	return <TableBody>{bodyElements}</TableBody>;
};

export default CustomTableBody;
