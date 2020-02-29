import React from "react";

import { TableHead, TableRow, TableCell, Checkbox } from "@material-ui/core";

const CustomTableHead = props => {
	const { handleSelectAll, isSelected } = props;

	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox">
					<Checkbox checked={isSelected} onChange={handleSelectAll} />
				</TableCell>
				<TableCell>ID</TableCell>
				<TableCell>Name</TableCell>
				<TableCell>Surname</TableCell>
				<TableCell>Rating</TableCell>
			</TableRow>
		</TableHead>
	);
};

export default CustomTableHead;
