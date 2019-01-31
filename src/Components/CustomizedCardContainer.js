import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';

import styles from '../assets/css/dashboard.css.js';

class CustomizedCardContainer extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render() {
    const { classes } = this.props;
    console.log('zaidi'+classes.cardHeader);
    return (
      <Card style={{marginTop:"20px"}}>
        <CardHeader className={classes.cardHeader} style={{padding:"6px",textAlign:"right"}}
          avatar={
            <Avatar 
            aria-label="Recipe" 
            style={{position:"absolute",marginTop:"-50px",borderRadius:"3px",padding:"12px",marginRight:"15px", boxShadow:"0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"}} 
            className={classes[this.props.headerBackground]}
            >
             {this.props.icon}
            </Avatar>
          }
          action={this.props.action}
          title={
            <Typography gutterBottom style={{fontSize: "1.15em"}}>
            {this.props.header}
            </Typography>
          }
        />
        <CardContent className={this.props.cardHeader} style={{paddingBottom:"8px"}}>
        {this.props.body}
        </CardContent>
      </Card>
    );
  }
}

// CardContainer.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(CustomizedCardContainer);