import React from 'react';
import Grid from '@material-ui/core/Grid';

// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import TicketDashboard from './TicketDashboard';
import LeadDashboard from './LeadDashboard';
import PageProgress from 'react-page-progress';
import ScrollUpButton from "react-scroll-up-button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,  //Check why it is giving error 
    // backgroundColor: "green", 
  },
}));

function Dashboard() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <ScrollUpButton
        EasingType="easeInOutCubic"
        AnimationDuration={70}
      />
      <PageProgress color={'red'} height={69} />
      <AppBar position="fixed" >
          <Toolbar>
            <Typography variant="h6" color="inherit" style={{float: 'left'}}>
              ADMIN DASHBOARD
            </Typography>
          </Toolbar>
      </AppBar>
      <Grid container style={{marginTop:"70px", justifyContent: "flex-end"}}>
        <Tabs value={value} onChange={handleChange} style={{color: "#657af1"}}>
          <Tab label="Ticket Dashboard" />
          <Tab label="Lead Dashboard" />
        </Tabs>
        <div>
          {value === 0 && <TicketDashboard/>}
          {value === 1 && <LeadDashboard/>}
        </div>
      </Grid>
    </div>
  );
}

export default Dashboard;