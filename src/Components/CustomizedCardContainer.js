import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  cardHeader: {
    padding: "0.2rem 0.5rem",
    marginBottom: "0",
    borderBottom: "none",
    background: "transparent",
    zIndex: "3 !important"
  },
  primaryClass1: {
    backgroundColor: '#A8AAC4',
  },
  secondaryClass1: {
    background: "linear-gradient(60deg, #f7a630, #ec8502)",
  },
  primaryClass2: {
    backgroundColor: '#E9F4EC',
  },
  secondaryClass2: {
    background: "linear-gradient(60deg, #66bb6a, #43a047)",
  },
  primaryClass3: {
    backgroundColor: '#F5E8F0',
  },
  secondaryClass3: {
    background: "linear-gradient(60deg, #f36aaf, #cc0066)",
  },
  primaryClass4: {
    backgroundColor: '#B7AFAF',
  },
  secondaryClass4: {
    background: "linear-gradient(60deg, #da8053, #b74005)",
  }
});

class CustomizedCardContainer extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render() {
    const { classes } = this.props;
    
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