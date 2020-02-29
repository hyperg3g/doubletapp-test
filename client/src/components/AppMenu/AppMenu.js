import React from "react";

import {
	Drawer,
	List,
	ListItem,
	ListItemText,
	ListItemIcon
} from "@material-ui/core";
import IconCreate from "@material-ui/icons/Create";
import IconList from "@material-ui/icons/List";

const AppMenu = props => {
	const { opened, handleClose, handleSwitch } = props;

	return (
		<Drawer anchor="left" open={opened} onClose={handleClose}>
			<List>
				<ListItem
					button
					id="studentsList"
					onClick={evt => {
						handleSwitch(evt);
						handleClose();
					}}
				>
					<ListItemIcon>
						<IconList />
					</ListItemIcon>
					<ListItemText>Students list</ListItemText>
				</ListItem>
				<ListItem
					button
					id="createStudent"
					onClick={evt => {
						handleSwitch(evt);
						handleClose();
					}}
				>
					<ListItemIcon>
						<IconCreate />
					</ListItemIcon>
					<ListItemText>Create students</ListItemText>
				</ListItem>
			</List>
		</Drawer>
	);
};

export default AppMenu;
