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

  //Subscription Channel URL
  serverURL = "http://172.16.3.45/CZCRM/dashboard_subscriber/subscribe_dashboard_events.php";  //should work with 46 as well
  sseSource = null;

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      ticketDashData: ticketDashData,
      leadDashData: leadDashData,
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
    if (window.EventSource) {
      //Initiating
      try {
        this.sseSource = new EventSource(this.serverURL);
        console.log ("Initiating SSE.");
      }catch (e) {
        console.error ("Unable to initiate SSE.");
      }
      //Open
      this.sseSource.addEventListener ("open", function (e) {
        console.log ("Opening SSE.");
      });
      //Message
      this.sseSource.addEventListener ("message", (e) => {
        console.log ("Message received from SSE.");
        console.log ("Data: ", e.data);
        this.handleSSE(e.data,"success"); 
      });
      //Error
      this.sseSource.addEventListener ("error", (e) => {
        console.warn ("Some error occured in SSE.");
      });
    }
    else {
      console.error ("SSE is not supported!");
    }
  }

  // SSE Dashboard : Handler
  handleSSE = (msg,variant) =>{
    if(msg !== "false")
    { 
      const packet = JSON.parse(msg);
      console.log(packet);
      var session_client_id = '809';
      console.log(packet.client_id);
      var client_id = (packet.client_id !== undefined)?packet.client_id:'';

      if(session_client_id === client_id){
        let ticketDashDataCopy = {...this.state.ticketDashData};
        ticketDashDataCopy.ticketStats.componentData.primaryHeaderValues = packet.value;
        this.setState({
          ticketDashData: ticketDashDataCopy
        });
      }
      // if(this.state.tokenArray.some(e => e === packet.token))
      // {
      //   this.props.enqueueSnackbar(packet.statusMsg, { 
      //     persist: false,
      //     variant: variant,
      //   });
      //   let notiStackCopy = [...this.state.notiStack];
      //   notiStackCopy.push(packet);

      //   this.setState({
      //     notiBadge : this.state.notiBadge + 1,
      //     modelsInfo: packet,
      //     isLoading : false,
      //     notiStack : notiStackCopy
      //   });
        
      // }
      // else if (this.props.location.pathname === packet.moduleInfo.module)
      // {
      //   console.log("====Module location===",this.props.location);
      //   this.props.enqueueSnackbar(packet.statusMsg, { 
      //     persist: false,
      //     variant: variant,
      //   });
      //   this.setState({modelsInfo: packet});
      // }
      
    }
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
            {this.state.value === 0 && <TicketDashboard {...this.state.ticketDashData}/>}
            {this.state.value === 1 && <LeadDashboard {...this.state.leadDashData}/>}
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