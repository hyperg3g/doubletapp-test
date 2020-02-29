import React, { useState } from "react";

import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import AppMenu from "../AppMenu/AppMenu";

const ApplicationBar = props => {
	const [opened, setOpened] = useState(false);
	const { handleSwitch } = props;

	const handleOpen = evt => {
		setOpened(true)
	};

	const handleClose = evt => {
		setOpened(false)
	};

	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton edge="start" color="inherit" onClick={handleOpen}>
					<MenuIcon />
				</IconButton>
				<AppMenu
					opened={opened}
					handleClose={handleClose}
					handleSwitch={handleSwitch}
				/>
				<Typography variant="h6">Doubletapp test</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default ApplicationBar;
