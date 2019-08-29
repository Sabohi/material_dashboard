import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/styles';
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

import { withStyles } from '@material-ui/styles';

const  styles = {
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
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      // ticketDashData: ticketDashData,
      // leadDashData: leadDashData,
      isLoaded: false,
    };
  }

  componentWillMount() 
  { 
      console.log("Dashboard -> componentWillMount()"); 
      // console.log(this.state.ticketDashData.ticketStats.componentData.primaryHeaderValues);

  } 
  //Notification SSE : Connection Intialize 
  componentDidMount()
  {
    console.log("=======[Dashboard.js] componentDidMount  =====");
    setInterval(this.fetchDashboardData,1000);
  }

  fetchDashboardData = () => {
    console.log("=======[Dashboard.js] fetchDashboardData  =====");
    // fetch("https://restcountries.eu/rest/v2/all")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       console.log(result)
    //       this.setState({
    //         isLoaded: true,
    //         // items: result.items
    //       });
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //   )
  }

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue
    });
  }

  render() {
    const {classes} = this.props;
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
              <Tabs  classes={{indicator: classes.tabsIndicator}} value={this.state.value} className={classes.tabs} onChange={this.handleChange}>
              <Tab className={classes.tabRoot} disableRipple label="Ticket Dashboard" />
              <Tab className={classes.tabRoot} disableRipple label="Lead Dashboard" />
              </Tabs>
              </Typography>
            </Toolbar>         
        </AppBar>
          <div className={classes.tabContent}>
            {this.state.value === 0 && <TicketDashboard {...ticketDashData}/>}
            {this.state.value === 1 && <LeadDashboard {...leadDashData}/>}
          </div>
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) 
  { 
    console.log("Dashboard -> shouldComponentUpdate()"); 
    return true; 
  } 

  componentWillUpdate() 
  { 
    console.log("Dashboard -> componentWillUpdate()"); 
  } 

  componentDidUpdate() 
  { 
    console.log("Dashboard -> componentDidUpdate()"); 
  } 
}

// export default Dashboard;
export default withStyles(styles)(Dashboard);