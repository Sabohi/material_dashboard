import React from 'react';
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

//Data
import ticketDashData from './Data/ticketDashData';
import leadDashData from './Data/leadDashData';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,  //Check why it is giving error 
    // backgroundColor: "green", 
  },
  grow: {
    flexGrow: 1,
  },
  tabs: {
    color: 'white',
    marginBottom: '-15px',
  },
  tabRoot: {
    fontWeight:'800 !important',
  },
  tabContent: {
    padding: '10px',
    marginTop: '70px',
  },
  tabsIndicator: {
    backgroundColor: '#f5f5f5 !important',
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
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
      <PageProgress color={'red'} height={68} />
      <AppBar position="fixed" >
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow} >
              ADMIN DASHBOARD
            </Typography>
            <Typography variant="h6">
            <Tabs  classes={{indicator: classes.tabsIndicator}} value={value} className={classes.tabs} onChange={handleChange}>
            <Tab className={classes.tabRoot} disableRipple label="Ticket Dashboard" />
            <Tab className={classes.tabRoot} disableRipple label="Lead Dashboard" />
            </Tabs>
            </Typography>
          </Toolbar>         
      </AppBar>
        <div className={classes.tabContent}>
          {value === 0 && <TicketDashboard {...ticketDashData}/>}
          {value === 1 && <LeadDashboard {...leadDashData}/>}
        </div>
  
    </div>
  );
}

export default Dashboard;