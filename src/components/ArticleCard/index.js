import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import Moment from 'react-moment';
import {
  CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography
} from '@material-ui/core';
import {
  Favorite as FavoriteIcon, Share as ShareIcon, ExpandMore as ExpandMoreIcon, MoreVert as MoreVertIcon
} from '@material-ui/icons';


class ArticleCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  truncate = (string, n) => {
    return (string.length > n) ? string.substr(0, n - 1) + '...' : string;
  };

  render() {
    const { classes } = this.props;
    const { title, date, image, summary, text } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.truncate(title, 50)}
          subheader={<Moment fromNow>{date}</Moment>}
        />
        <CardMedia
          className={classes.media}
          image={image}
          title="Image"
        />
        <CardContent>
          <Typography component="p">{this.truncate(summary, 150)}</Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>{text}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default withStyles(styles)(ArticleCard);