import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

//For progress bar
import LinearProgress from '@material-ui/core/LinearProgress';
import { Tooltip } from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';

import CustomizedDialog from '../Components/CustomizedDialog';

// Styles
import styles from '../assets/css/dashboard.css.js';

class CustomizedCardContent extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render() {
    const { classes } = this.props;
    console.log('subuhi',classes[this.props.primaryLinearColorPrimary]);
    return (
        <div className={classes.cardHeader} style={{paddingBottom:"8px"}}>
          <Typography component="h2">
            {this.props.primaryHeader}
            <div style={{float: 'right'}}>
              <CustomizedDialog name={this.props.primaryHeader} value={this.props.primaryHeaderValues} {...this.props.primaryHeaderValuesData}/>
            </div>
          </Typography>
          <br/>
          <Tooltip title={this.props.primaryProgressBarValueRate+'%'} TransitionComponent={Zoom} interactive>
            <LinearProgress          
            classes={{
              colorPrimary: classes[this.props.primaryLinearColorPrimary],           
              barColorPrimary: classes[this.props.primaryLinearBarColorPrimary],
            }}        
            variant="determinate" 
            value={this.props.primaryProgressBarValueRate}
            />
          </Tooltip> 
          <Typography color="textSecondary" style={{marginTop:"2px"}}>
            {this.props.primaryProgressBarHeader} 
            <span style={{float: 'right',fontWeight:600,fontSize:'1.2em'}}>
            ({this.props.primaryProgressBarValue},{this.props.primaryProgressBarValueRate}%)
            </span>
          </Typography>
          <br/>
          <Typography component="h2">
            {this.props.secondaryHeader} 
            <div style={{float: 'right'}}>
              <CustomizedDialog name={this.props.secondaryHeader} value={this.props.secondaryHeaderValues} {...this.props.secondaryHeaderValuesData}/>
            </div>
          </Typography>
          <br/>
          <Tooltip title={this.props.secondaryProgressBarValueRate+'%'} TransitionComponent={Zoom} interactive>
            <LinearProgress     
            classes={{
              colorPrimary: classes[this.props.secondaryLinearColorPrimary],           
              barColorPrimary: classes[this.props.secondaryLinearBarColorPrimary],
            }}        
            variant="determinate" 
            value={this.props.secondaryProgressBarValueRate}
            />
          </Tooltip>
          <Typography color="textSecondary" style={{marginTop:"2px"}}>
            {this.props.secondaryProgressBarHeader} 
            <span style={{float: 'right',fontWeight:600,fontSize:'1.2em'}}>
            ({this.props.secondaryProgressBarValue},{this.props.secondaryProgressBarValueRate}%)
            </span>
          </Typography>
        </div>
    );
  }
}

// CustomizedCardContent.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(CustomizedCardContent);
