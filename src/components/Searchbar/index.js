import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import './styles.css';
import {
    Paper, InputBase, Divider, IconButton, Grid, Typography
} from '@material-ui/core';
import {
    Search as SearchIcon, KeyboardArrowDown as FilterIcon
} from '@material-ui/icons';

const Searchbar = (props) => {
    const classes = props.classes;
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.container}
        >
            <div className="logoContainer">
                <img className="logo" src="logo.png" alt="logo" />
            </div>
            <Typography
                variant="h5"
                color="primary"
                align="center"
                className={classes.title}
            >
                Hello dude, whats'up ?
            </Typography>
            <Paper className={classes.root} elevation={1}>
                <InputBase onChange={props.onChange} onKeyPress={props.onPress} className={classes.input} placeholder="Search News" />
                <IconButton onClick={props.onSearch} className={classes.iconButton} aria-label="Search">
                    <SearchIcon />
                </IconButton>
                <Divider className={classes.divider} />
                <IconButton color="primary" className={classes.iconButton} aria-label="Filter">
                    <FilterIcon />
                </IconButton>
            </Paper>
        </Grid>
    );
}

export default withStyles(styles)(Searchbar);