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

import styles from './Css/styles.module.css';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, newValue) {
    this.setState({
      value: newValue
    });
  }
  render() {
    console.log('=========');
    console.log(styles.root);
    return (
      <div className={styles.root}>
        <ScrollUpButton
          EasingType="easeInOutCubic"
          AnimationDuration={70}
        />
        <PageProgress color={'red'} height={68} />
        <AppBar position="fixed" >
            <Toolbar>
              <Typography variant="h6" color="inherit" className={styles.grow} >
                ADMIN DASHBOARD
              </Typography>
              <Typography variant="h6">
              <Tabs  classes={{indicator: styles.tabsIndicator}} value={this.state.value} className={styles.tabs} onChange={this.handleChange}>
              <Tab className={styles.tabRoot} disableRipple label="Ticket Dashboard" />
              <Tab className={styles.tabRoot} disableRipple label="Lead Dashboard" />
              </Tabs>
              </Typography>
            </Toolbar>         
        </AppBar>
          <div className={styles.tabContent}>
            {this.state.value === 0 && <TicketDashboard {...ticketDashData}/>}
            {this.state.value === 1 && <LeadDashboard {...leadDashData}/>}
          </div>
      </div>
    );
  }
}

export default Dashboard;