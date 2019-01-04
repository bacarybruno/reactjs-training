import React from 'react';
import {
    AppBar, Toolbar, Typography, IconButton, withStyles, LinearProgress
} from '@material-ui/core';
import { Settings as SettingsIcon } from '@material-ui/icons';
import styles from './styles';

const Header = (props) => {
    return (
        <AppBar position="sticky" color="primary">
            <Toolbar>
                <Typography variant="h6" color="inherit" className={props.classes.grow}>
                    {props.label}
                </Typography>
                <IconButton color="inherit" onClick={props.onSettingsPress}>
                    <SettingsIcon />
                </IconButton>
            </Toolbar>
            {props.loading && <LinearProgress color="secondary" />}
        </AppBar>
    );
};

export default withStyles(styles)(Header);