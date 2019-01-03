import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import {
    Paper, InputBase, Divider, IconButton, Grid
} from '@material-ui/core';
import {
    Search as SearchIcon, KeyboardArrowDown as FilterIcon
} from '@material-ui/icons';

const Searchbar = (props) => {
    const classes = props.classes;
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.container}
        >
            <Paper className={classes.root} elevation={1}>
                <InputBase onChange={props.onChange} className={classes.input} placeholder="Search News" />
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