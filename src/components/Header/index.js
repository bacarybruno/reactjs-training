import React from 'react';
import styles from './styles';
import { AppBar, Toolbar, Typography, IconButton, withStyles } from '@material-ui/core';
import { Settings as SettingsIcon } from '@material-ui/icons';

const Header = (props) => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" color="inherit" className={props.classes.grow}>
                    {props.label}
                </Typography>
                <IconButton color="inherit">
                  <SettingsIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default withStyles(styles)(Header);