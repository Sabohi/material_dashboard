import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
// import Avatar from '@material-ui/core/Avatar';
import './SimpleTable.css';
// import Typography from '@material-ui/core/Typography';
// import FullScreenDialog from './FullScreenDialog';
import CustomizedPieChart from './CustomizedPieChart';
import CustomizedMenu from './Menu';


//For progress bar
// import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({
  cardHeader: {
    padding: "0.75rem 1.25rem",
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
    background: "linear-gradient(60deg, #ffa726, #fb8c00)",
  },
  primaryClass2: {
    backgroundColor: '#E9F4EC',
  },
  secondaryClass2: {
    backgroundColor: '#006600',
  },
  primaryClass3: {
    backgroundColor: '#F5E8F0',
  },
  secondaryClass3: {
    backgroundColor: '#cc0066',
  },
  primaryClass4: {
    backgroundColor: '#B7AFAF',
  },
  secondaryClass4: {
    backgroundColor: '#993300',
  }
});

class CustomizedPieChartCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render() {
    const { classes } = this.props;
    
    return (
      
      <Card style={{marginTop:"20px",height: "350px"}}>
        {/* <CardHeader style={{padding:"10px",textAlign:"right"}}
          avatar={
            <Avatar aria-label="Recipe" style={{position:"absolute",marginTop:"-50px",borderRadius:"3px",padding:"12px",marginRight:"15px", boxShadow:"0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"}} className={classes[this.props.linearBarColorPrimary]}>
             {this.props.tableHeading}
            </Avatar>
          }
          action={
            <FullScreenDialog {...this.props.dialogData}/>
          }
          title={this.props.prePrimaryHeader}
        />  */}
        <CardHeader 
          cardHeaderStats 
          title={this.props.chartHeading} 
          subheader={<p>Today's Data</p>}
          color="warning" 
          style={{padding:"10px",textAlign:"left"}}
          action={
            <CustomizedMenu {...this.props.MenuData}/>
          }
        />
        <CardContent className={classes.cardHeader}>
         <CustomizedPieChart {...this.props}/>
        </CardContent>
      </Card>
    );
  }
}

CustomizedPieChartCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedPieChartCard);