import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = (props) => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    {props.label}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;