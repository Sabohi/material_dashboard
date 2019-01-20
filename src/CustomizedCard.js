import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FullScreenDialog from './FullScreenDialog';

//For progress bar
import LinearProgress from '@material-ui/core/LinearProgress';

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
    backgroundColor: '#0712B3',
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

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render() {
    const { classes } = this.props;
    
    return (
      <Card>
        <CardHeader 
          avatar={
            <Avatar aria-label="Recipe" className={classes[this.props.linearBarColorPrimary]}>
             {this.props.prePrimaryHeader.toString().charAt(0)}
            </Avatar>
          }
          action={
            <FullScreenDialog {...this.props.dialogData}/>
          }
          title={this.props.prePrimaryHeader}
        />
        <CardContent className={classes.cardHeader}>
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
          <Typography color="textSecondary">
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
        </CardContent>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);