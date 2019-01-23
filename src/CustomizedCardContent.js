import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

//For progress bar
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({
  cardHeader: {
    padding: "0.2rem 0.5rem",
    marginBottom: "0",
    borderBottom: "none",
    background: "transparent",
    zIndex: "3 !important",
    "&$cardHeaderPlain,&$cardHeaderIcon,&$cardHeaderStats,&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
      margin: "0 15px",
      padding: "0",
      position: "relative",
      color: "#FFFFFF"
    },
    "&:first-child": {
      borderRadius: "calc(.25rem - 1px) calc(.25rem - 1px) 0 0"
    },
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
      "&:not($cardHeaderIcon)": {
        borderRadius: "3px",
        marginTop: "-20px",
        padding: "15px"
      }
    },
    "&$cardHeaderStats svg": {
      fontSize: "36px",
      lineHeight: "56px",
      textAlign: "center",
      width: "36px",
      height: "36px",
      margin: "10px 10px 4px"
    },
    "&$cardHeaderStats i,&$cardHeaderStats .material-icons": {
      fontSize: "36px",
      lineHeight: "56px",
      width: "56px",
      height: "56px",
      textAlign: "center",
      overflow: "unset",
      marginBottom: "1px"
    },
    "&$cardHeaderStats$cardHeaderIcon": {
      textAlign: "right"
    }
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

class CustomizedCardContent extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render() {
    const { classes } = this.props;
    
    return (
        <div className={classes.cardHeader} style={{paddingBottom:"8px"}}>
          <Typography component="h2">
            {this.props.primaryHeader}
            <span style={{float: 'right',fontWeight:600,fontSize:'1.2em'}}>
             {this.props.primaryHeaderValus}
            </span>
          </Typography>
          <br/>
          <LinearProgress 
          classes={{
            colorPrimary: classes[this.props.linearColorPrimary],           
            barColorPrimary: classes[this.props.linearBarColorPrimary],
          }}        
          variant="determinate" 
          value={this.props.progressBarValue}
          />
          <Typography color="textSecondary" style={{marginTop:"2px"}}>
          {this.props.progressBarHeader} 
          <span style={{float: 'right',fontWeight:600,fontSize:'1.2em'}}>
          {this.props.progressBarValue}%
          </span>
          </Typography>
          <br/>
          <Typography component="h2">
            {this.props.secondaryHeader} 
            <span style={{float: 'right',fontWeight:600,fontSize:'1.2em'}}>
             {this.props.secondaryHeaderValus}
            </span>
          </Typography>
        </div>
    );
  }
}

CustomizedCardContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedCardContent);