//API
import {SERVER_IP, PROTOCOL, PORT, API_URL_USER, API_URL_TICKET_LEAD, API_URL_TASK, API_URL_MAIL, API_URL_PRIORITY, API_URL_STATUS, API_URL_TYPE, API_URL_STATE, API_URL_DISPOSITION} from './../Configs/apiConf';
import fetchCall from './FetchCaller';
import { array } from 'prop-types';

export const ticketLeadData = (type,timePeriod,COMPONENT) => {
  let infoRequired = '';
  let dashboardDataCopy = {};
  switch(type){
    case 'ticket':
      infoRequired = 'ticketStatsData';
      dashboardDataCopy = {...COMPONENT.state.ticketDashboardData};
    break;
    case 'lead':
      infoRequired = 'leadStatsData';
      dashboardDataCopy = {...COMPONENT.state.leadDashboardData};
    break;
  }

  const url_ticket_lead = new URL(`${PROTOCOL}${SERVER_IP}:${PORT}${API_URL_TICKET_LEAD}`);
  console.log('url_ticket_lead url',`${PROTOCOL}${SERVER_IP}:${PORT}${API_URL_TICKET_LEAD}`);
  const fetchCallOptions = {
      method: "POST",
      // credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: '1477037397668528128',
        reqType: 'getTicketLeadsInfo',   
        infoRequired: infoRequired,   
        timePeriod: timePeriod,   
      })
  };
  fetchCall(url_ticket_lead,fetchCallOptions,"json").then((result) => {
    // console.log('here');
    // console.log(result); 

    let resultData = {};
    if(result) {
      try {
        resultData = JSON.parse(result);
      } catch(e) {
          console.log(e); // error in the above string (in this case, yes)!
      }
    }
    switch(type){
      case 'ticket':
        let totalTicketsCreated = ((resultData.totalTicketsCreated !== null) && (resultData.totalTicketsCreated !== undefined))?resultData.totalTicketsCreated:'';
        let totalTicketsClosed = ((resultData.totalTicketsClosed !== null) && (resultData.totalTicketsClosed !== undefined))?resultData.totalTicketsClosed:'';
        let totalTicketsClosedPercent = ((resultData.totalTicketsClosedPercent !== null) && (resultData.totalTicketsClosedPercent !== undefined))?resultData.totalTicketsClosedPercent:'';
        let totalTicketsEscalated = ((resultData.totalTicketsEscalated !== null) && (resultData.totalTicketsEscalated !== undefined))?resultData.totalTicketsEscalated:'';
        let totalTicketsEscalatedPercent = ((resultData.totalTicketsEscalatedPercent !== null) && (resultData.totalTicketsEscalatedPercent !== undefined))?resultData.totalTicketsEscalatedPercent:'';
    
        dashboardDataCopy.ticketStatsData.componentData.primaryHeaderValues = totalTicketsCreated;
        dashboardDataCopy.ticketStatsData.componentData.primaryProgressBarValue = totalTicketsClosed;
        dashboardDataCopy.ticketStatsData.componentData.primaryProgressBarValueRate = totalTicketsClosedPercent;
        dashboardDataCopy.ticketStatsData.componentData.secondaryHeaderValues = totalTicketsEscalated;
        dashboardDataCopy.ticketStatsData.componentData.secondaryProgressBarValue = totalTicketsEscalatedPercent;
        dashboardDataCopy.ticketStatsData.componentData.secondaryProgressBarValueRate = totalTicketsEscalatedPercent;

      break;
      case 'lead':
        let totalLeadsCreated = ((resultData.totalLeadsCreated !== null) && (resultData.totalLeadsCreated !== undefined))?resultData.totalLeadsCreated:'';
        let totalTicketsConverted = ((resultData.totalTicketsConverted !== null) && (resultData.totalTicketsConverted !== undefined))?resultData.totalTicketsConverted:'';
        let totalLeadsConvertedPercent = ((resultData.totalLeadsConvertedPercent !== null) && (resultData.totalLeadsConvertedPercent !== undefined))?resultData.totalLeadsConvertedPercent:'';
        let totalLeadsEscalated = ((resultData.totalLeadsEscalated !== null) && (resultData.totalLeadsEscalated !== undefined))?resultData.totalLeadsEscalated:'';
        let totalLeadsEscalatedPercent = ((resultData.totalLeadsEscalatedPercent !== null) && (resultData.totalLeadsEscalatedPercent !== undefined))?resultData.totalLeadsEscalatedPercent:'';
    
        dashboardDataCopy.leadStatsData.componentData.primaryHeaderValues = totalLeadsCreated;
        dashboardDataCopy.leadStatsData.componentData.primaryProgressBarValue = totalTicketsConverted;
        dashboardDataCopy.leadStatsData.componentData.primaryProgressBarValueRate = totalLeadsConvertedPercent;
        dashboardDataCopy.leadStatsData.componentData.secondaryHeaderValues = totalLeadsEscalated;
        dashboardDataCopy.leadStatsData.componentData.secondaryProgressBarValue = totalLeadsEscalatedPercent;
        dashboardDataCopy.leadStatsData.componentData.secondaryProgressBarValueRate = totalLeadsEscalatedPercent;
      break;
    }
      
    if(type == 'ticket'){
      COMPONENT.setState({
        ticketDashboardData : dashboardDataCopy
      });
    }else if(type == 'lead'){
      COMPONENT.setState({
        leadDashboardData : dashboardDataCopy
      });
    }
  },
  (error) => {
      // COMPONENT.setState({
      //       IS_LOADING: false,
      //     });
  });
}
export const taskData = (type,timePeriod,COMPONENT) => {
  let infoRequired = '';
  let dashboardDataCopy = {};
  switch(type){
    case 'ticket':
      infoRequired = 'ticketTaskStatsData';
      dashboardDataCopy = {...COMPONENT.state.ticketDashboardData};
    break;
    case 'lead':
      infoRequired = 'leadTaskStatsData';
      dashboardDataCopy = {...COMPONENT.state.leadDashboardData};
    break;
  }

  const url_task = new URL(`${PROTOCOL}${SERVER_IP}:${PORT}${API_URL_TASK}`);
  console.log('url_task url',`${PROTOCOL}${SERVER_IP}:${PORT}${API_URL_TASK}`);
  const fetchCallOptions = {
      method: "POST",
      // credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: '1477037397668528128',    //590: 2227397115179433984 , 809: 1477037397668528128
        reqType: 'getTasksInfo',   
        infoRequired: infoRequired,   
        timePeriod: timePeriod,   
      })
  };
  fetchCall(url_task,fetchCallOptions,"json").then((result) => {
    console.log('here');
    console.log(result); 
    // let resultData = JSON.parse(result);
    let resultData = {};

    if(result) {
      try {
        resultData = JSON.parse(result);
      } catch(e) {
          console.log(e); // error in the above string (in this case, yes)!
      }
    }

    let totalTasksCreated = ((resultData.totalTasksCreated !== null) && (resultData.totalTasksCreated !== undefined))?resultData.totalTasksCreated:'';
    let totalTasksClosed = ((resultData.totalTasksClosed !== null) && (resultData.totalTasksClosed !== undefined))?resultData.totalTasksClosed:'';
    let totalTasksClosedPercent = ((resultData.totalTasksClosedPercent !== null) && (resultData.totalTasksClosedPercent !== undefined))?resultData.totalTasksClosedPercent:'';
    let totalTasksOverdue = ((resultData.totalTasksOverdue !== null) && (resultData.totalTasksOverdue !== undefined))?resultData.totalTasksOverdue:'';
    let totalTasksOverduePercent = ((resultData.totalTasksOverduePercent !== null) && (resultData.totalTasksOverduePercent !== undefined))?resultData.totalTasksOverduePercent:'';

    dashboardDataCopy.taskStatsData.componentData.primaryHeaderValues = totalTasksCreated;
    dashboardDataCopy.taskStatsData.componentData.primaryProgressBarValue = totalTasksClosed;
    dashboardDataCopy.taskStatsData.componentData.primaryProgressBarValueRate = totalTasksClosedPercent;
    dashboardDataCopy.taskStatsData.componentData.secondaryHeaderValues = totalTasksOverdue;
    dashboardDataCopy.taskStatsData.componentData.secondaryProgressBarValue = totalTasksOverduePercent;
    dashboardDataCopy.taskStatsData.componentData.secondaryProgressBarValueRate = totalTasksOverduePercent;
    
    if(type == 'ticket'){
      COMPONENT.setState({
        ticketDashboardData : dashboardDataCopy
      });
    }else if(type == 'lead'){
      COMPONENT.setState({
        leadDashboardData : dashboardDataCopy
      });
    }
  },
  (error) => {
      // COMPONENT.setState({
      //       IS_LOADING: false,
      //     });
  });
}
export const mailData = (type,timePeriod,COMPONENT) => {
  let infoRequired = '';
  let dashboardDataCopy = {};
  switch(type){
    case 'ticket':
      infoRequired = 'ticketTaskStatsData';
      dashboardDataCopy = {...COMPONENT.state.ticketDashboardData};
    break;
    case 'lead':
      infoRequired = 'leadTaskStatsData';
      dashboardDataCopy = {...COMPONENT.state.leadDashboardData};
    break;
  }

  const url_mail = new URL(`${PROTOCOL}${SERVER_IP}:${PORT}${API_URL_MAIL}`);
  console.log('url_mail',`${PROTOCOL}${SERVER_IP}:${PORT}${API_URL_MAIL}`);
  const fetchCallOptions = {
      method: "POST",
      // credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: '1477037397668528128',    //590: 2227397115179433984 , 809: 1477037397668528128
        reqType: 'getMailsInfo',   
        infoRequired: infoRequired,   
        timePeriod: timePeriod,   
      })
  };
  fetchCall(url_mail,fetchCallOptions,"json").then((result) => {
    console.log('here');
    console.log(result); 
    // let resultData = JSON.parse(result);

    let resultData = {};

    if(result) {
      try {
        resultData = JSON.parse(result);
      } catch(e) {
          console.log(e); // error in the above string (in this case, yes)!
      }
    }

    let totalMailsReceived = ((resultData.totalMailsReceived !== null) && (resultData.totalMailsReceived !== undefined))?resultData.totalMailsReceived:'';
    let totalMailsReplied = ((resultData.totalMailsReplied !== null) && (resultData.totalMailsReplied !== undefined))?resultData.totalMailsReplied:'';
    let totalMailsRepliedPercent = ((resultData.totalMailsRepliedPercent !== null) && (resultData.totalMailsRepliedPercent !== undefined))?resultData.totalMailsRepliedPercent:'';
    let totalFreshMailsReceived = ((resultData.totalFreshMailsReceived !== null) && (resultData.totalFreshMailsReceived !== undefined))?resultData.totalFreshMailsReceived:'';
    let totalFreshMailsReplied = ((resultData.totalFreshMailsReplied !== null) && (resultData.totalFreshMailsReplied !== undefined))?resultData.totalFreshMailsReplied:'';
    let totalFreshMailsRepliedPercent = ((resultData.totalFreshMailsRepliedPercent !== null) && (resultData.totalFreshMailsRepliedPercent !== undefined))?resultData.totalFreshMailsRepliedPercent:'';

    dashboardDataCopy.mailStatsData.componentData.primaryHeaderValues = totalMailsReceived;
    dashboardDataCopy.mailStatsData.componentData.primaryProgressBarValue = totalMailsReplied;
    dashboardDataCopy.mailStatsData.componentData.primaryProgressBarValueRate = totalMailsRepliedPercent;
    dashboardDataCopy.mailStatsData.componentData.secondaryHeaderValues = totalFreshMailsReceived;
    dashboardDataCopy.mailStatsData.componentData.secondaryProgressBarValue = totalFreshMailsReplied;
    dashboardDataCopy.mailStatsData.componentData.secondaryProgressBarValueRate = totalFreshMailsRepliedPercent;
    
    if(type == 'ticket'){
      COMPONENT.setState({
        ticketDashboardData : dashboardDataCopy
      });
    }else if(type == 'lead'){
      COMPONENT.setState({
        leadDashboardData : dashboardDataCopy
      });
    }
  },
  (error) => {
      // COMPONENT.setState({
      //       IS_LOADING: false,
      //     });
  });
}
export const usersData = (type,COMPONENT) => {
    let infoRequired = '';
    let dashboardDataCopy = {};
    switch(type){
      case 'ticket':
        infoRequired = 'ticketUsersInfo';
        dashboardDataCopy = {...COMPONENT.state.ticketDashboardData};
      break;
      case 'lead':
        infoRequired = 'leadUsersInfo';
        dashboardDataCopy = {...COMPONENT.state.leadDashboardData};
      break;
    }

    //Fetching info of ticket/lead users
    const url_users = new URL(`${PROTOCOL}${SERVER_IP}:${PORT}${API_URL_USER}`);
    console.log('total_ticket_users url',`${PROTOCOL}${SERVER_IP}:${PORT}${API_URL_USER}`);
    const fetchCallOptions = {
        method: "POST",
        // credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          key: '1477037397668528128',
          reqType: 'getUsersInfo',   
          infoRequired: infoRequired,   
        })
    };
    fetchCall(url_users,fetchCallOptions,"json").then((result) => {
      console.log(result); 
      //{"status":"success","totalTicketUsers":"2","totalActiveTicketUsers":"0","totalLoggedinTicketUsers":"0","totalLockedTicketUsers":"2"}

      // let resultData = JSON.parse(result);

      let resultData = {};

      if(result) {
        try {
          resultData = JSON.parse(result);
        } catch(e) {
            console.log(e); // error in the above string (in this case, yes)!
        }
      }

      let totalUsers = ((resultData.totalUsers !== null) && (resultData.totalUsers !== undefined))?resultData.totalUsers:'';
      let totalActiveUsers = ((resultData.totalActiveUsers !== null) && (resultData.totalActiveUsers !== undefined))?resultData.totalActiveUsers:'';
      let totalActiveUsersRate = ((resultData.totalActiveUsersRate !== null) && (resultData.totalActiveUsersRate !== undefined))?resultData.totalActiveUsersRate:'';
      let totalLoggedinUsers = ((resultData.totalLoggedinUsers !== null) && (resultData.totalLoggedinUsers !== undefined))?resultData.totalLoggedinUsers:'';
      let totalLockedUsers = ((resultData.totalLockedUsers !== null) && (resultData.totalLockedUsers !== undefined))?resultData.totalLockedUsers:'';
      let totalLockedUsersRate = ((resultData.totalLockedUsersRate !== null) && (resultData.totalLockedUsersRate !== undefined))?resultData.totalLockedUsersRate:'';
      
      dashboardDataCopy.userStatsData.componentData.primaryHeaderValues = totalUsers;
      dashboardDataCopy.userStatsData.componentData.primaryProgressBarValue = totalActiveUsers;
      dashboardDataCopy.userStatsData.componentData.primaryProgressBarValueRate = totalActiveUsersRate;
      dashboardDataCopy.userStatsData.componentData.secondaryHeaderValues = totalLoggedinUsers;
      dashboardDataCopy.userStatsData.componentData.secondaryProgressBarValue = totalLockedUsers;
      dashboardDataCopy.userStatsData.componentData.secondaryProgressBarValueRate = totalLockedUsersRate;
        
      if(type == 'ticket'){
        COMPONENT.setState({
          ticketDashboardData : dashboardDataCopy
        });
      }else if(type == 'lead'){
        COMPONENT.setState({
          leadDashboardData : dashboardDataCopy
        });
      }
    },
    (error) => {
        // COMPONENT.setState({
        //       IS_LOADING: false,
        //     });
    });
}

export const priorityData = (type,COMPONENT) => {
  let infoRequired = '';
  let dashboardDataCopy = {};
  switch(type){
    case 'ticket':
      infoRequired = 'ticketPriorityInfo';
      dashboardDataCopy = {...COMPONENT.state.ticketDashboardData};
    break;
  }
  console.log('================SZZZZZ===================='); 

  //Fetching info of ticket/lead priority
  const url_priority = new URL(`${PROTOCOL}${SERVER_IP}:${PORT}${API_URL_PRIORITY}`);
  console.log('total_priority_wise_info url',`${PROTOCOL}${SERVER_IP}:${PORT}${API_URL_PRIORITY}`);
  const fetchCallOptions = {
      method: "POST",
      // credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: '1477037397668528128',
        reqType: 'getPriorityInfo',   
        infoRequired: infoRequired,   
      })
  };
  fetchCall(url_priority,fetchCallOptions,"json").then((result) => {
    console.log('================here===================='); 
    console.log('%c priority','font-weight:800;color:orange;',result); 

    // let resultData = JSON.parse(result);
    let resultData = {};

    if(result) {
      try {
        resultData = JSON.parse(result);
      } catch(e) {
          console.log(e); // error in the above string (in this case, yes)!
      }
    }
    
    console.log('%c priority parse','font-weight:800;color:orange;',resultData); 

    let data = ((resultData.data !== null) && (resultData.data !== undefined))?resultData.data:array();
    console.log('%c PREVIOUS priority data','font-weight:800;color:orange;',dashboardDataCopy.priorityWiseTicketsData.componentData.data); 

    console.log('%c RECEIVED priority data','font-weight:800;color:orange;',data); 

    dashboardDataCopy.priorityWiseTicketsData.componentData.data = data;
      
    if(type == 'ticket'){
      console.log('%c hereeeeee1','font-weight:800;color:orange;',data); 

      COMPONENT.setState({
        ticketDashboardData : dashboardDataCopy
      });
    }
    // else if(type == 'lead'){
    //   COMPONENT.setState({
    //     priorityWiseLeadsData : dashboardDataCopy
    //   });
    // }
  },
  (error) => {
    console.log('================error==================='); 
      // COMPONENT.setState({
      //       IS_LOADING: false,
      //     });
  });
}

export const statusData = (type,COMPONENT) => {
  let infoRequired = '';
  let dashboardDataCopy = {};
  switch(type){
    case 'ticket':
      infoRequired = 'ticketStatusInfo';
      dashboardDataCopy = {...COMPONENT.state.ticketDashboardData};
    break;
    case 'lead':
      infoRequired = 'leadStatusInfo';
      dashboardDataCopy = {...COMPONENT.state.leadDashboardData};
    break;
  }

  //Fetching info of ticket/lead users
  const url_status = new URL(`${PROTOCOL}${SERVER_IP}:${PORT}${API_URL_STATUS}`);
  console.log('total_status_wise_info url',`${PROTOCOL}${SERVER_IP}:${PORT}${API_URL_STATUS}`);
  const fetchCallOptions = {
      method: "POST",
      // credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: '1477037397668528128',
        reqType: 'getStatusInfo',   
        infoRequired: infoRequired,   
      })
  };
  fetchCall(url_status,fetchCallOptions,"json").then((result) => {
    console.log(result); 

    // let resultData = JSON.parse(result);
    let resultData = {};

    if(result) {
      try {
        resultData = JSON.parse(result);
      } catch(e) {
          console.log(e); // error in the above string (in this case, yes)!
      }
    }

    console.log('DATA ====> ',dashboardDataCopy);
    // let data = ((resultData.data !== null) && (resultData.data !== undefined))?resultData.data:array();
    let data = resultData.data;

    console.log('%c RECEIVED priority data','font-weight:800;color:orange;',data); 

    if(type == 'ticket'){
      dashboardDataCopy.statusWiseTicketsData.componentData.data = data;

      COMPONENT.setState({
        ticketDashboardData : dashboardDataCopy
      });
    }else if(type == 'lead'){
      dashboardDataCopy.statusWiseLeadsData.componentData.data = data;

      COMPONENT.setState({
        leadDashboardData : dashboardDataCopy
      });
    }
  },
  (error) => {
      // COMPONENT.setState({
      //       IS_LOADING: false,
      //     });
  });
}

export const typeData = (type,COMPONENT) => {
  let infoRequired = '';
  let dashboardDataCopy = {};
  switch(type){
    case 'ticket':
      infoRequired = 'ticketTypeInfo';
      dashboardDataCopy = {...COMPONENT.state.ticketDashboardData};
    break;
  }

  //Fetching info of ticket/lead users
  const url_type = new URL(`${PROTOCOL}${SERVER_IP}:${PORT}${API_URL_TYPE}`);
  console.log('total_ticket_type_info url',`${PROTOCOL}${SERVER_IP}:${PORT}${API_URL_TYPE}`);
  const fetchCallOptions = {
      method: "POST",
      // credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: '1477037397668528128',
        reqType: 'getTypeInfo',   
        infoRequired: infoRequired,   
      })
  };
  fetchCall(url_type,fetchCallOptions,"json").then((result) => {
    console.log(result); 

    // let resultData = JSON.parse(result);
    let resultData = {};

    if(result) {
      try {
        resultData = JSON.parse(result);
      } catch(e) {
          console.log(e); // error in the above string (in this case, yes)!
      }
    }

    let data = ((resultData.data !== null) && (resultData.data !== undefined))?resultData.data:array();

    console.log('%c RECEIVED ticket type data','font-weight:800;color:orange;',data); 
 
    dashboardDataCopy.tickeTypeWiseTicketsData.componentData.data = data;

    if(type == 'ticket'){
      COMPONENT.setState({
        ticketDashboardData : dashboardDataCopy
      });
    }
  },
  (error) => {
      // COMPONENT.setState({
      //       IS_LOADING: false,
      //     });
  });
}

export const stateData = (type,COMPONENT) => {
  let infoRequired = '';
  let dashboardDataCopy = {};
  switch(type){
    case 'lead':
      infoRequired = 'leadStateInfo';
      dashboardDataCopy = {...COMPONENT.state.leadDashboardData};
    break;
  }

  //Fetching info of ticket/lead users
  const url_state = new URL(`${PROTOCOL}${SERVER_IP}:${PORT}${API_URL_STATE}`);
  console.log('total_lead_state_info url',`${PROTOCOL}${SERVER_IP}:${PORT}${API_URL_STATE}`);
  const fetchCallOptions = {
      method: "POST",
      // credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: '1477037397668528128',
        reqType: 'getStateInfo',   
        infoRequired: infoRequired,   
      })
  };
  fetchCall(url_state,fetchCallOptions,"json").then((result) => {
    console.log(result); 

    // let resultData = JSON.parse(result);
    let resultData = {};

    if(result) {
      try {
        resultData = JSON.parse(result);
      } catch(e) {
          console.log(e); // error in the above string (in this case, yes)!
      }
    }

    let data = ((resultData.data !== null) && (resultData.data !== undefined))?resultData.data:array();

    if(type == 'lead'){
      dashboardDataCopy.stateWiseLeadsData.componentData.data = data;
      
      COMPONENT.setState({
        stateWiseLeadsData : dashboardDataCopy
      });
    }
  },
  (error) => {
      // COMPONENT.setState({
      //       IS_LOADING: false,
      //     });
  });
}

export const dispositionData = (type,COMPONENT) => {
  let infoRequired = '';
  let dashboardDataCopy = {};
  switch(type){
    case 'lead':
      infoRequired = 'leadDispositionInfo';
      dashboardDataCopy = {...COMPONENT.state.leadDashboardData};
    break;
  }

  //Fetching info of ticket/lead disposition
  const url_disp = new URL(`${PROTOCOL}${SERVER_IP}:${PORT}${API_URL_DISPOSITION}`);
  console.log('total_lead_disposition_info url',`${PROTOCOL}${SERVER_IP}:${PORT}${API_URL_DISPOSITION}`);
  const fetchCallOptions = {
      method: "POST",
      // credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: '1477037397668528128',
        reqType: 'getDispositionInfo',   
        infoRequired: infoRequired,   
      })
  };
  fetchCall(url_disp,fetchCallOptions,"json").then((result) => {
    console.log(result); 
    console.log('========SUBBBBBB======',result);

    // let resultData = JSON.parse(result);
    let resultData = {};

    if(result) {
      try {
        resultData = JSON.parse(result);
        console.log('=========disposition resultData======',resultData);

      } catch(e) {
          console.log(e); // error in the above string (in this case, yes)!
      }
    }
 
    let data = ((resultData.data !== null) && (resultData.data !== undefined))?resultData.data:array();
    
    console.log('=========disposition data======',data);
    if(type == 'lead'){
      dashboardDataCopy.dispositionWiseLeadsData.componentData.data = data;

      COMPONENT.setState({
        leadDashboardData : dashboardDataCopy
      });
    }
  },
  (error) => {
      // COMPONENT.setState({
      //       IS_LOADING: false,
      //     });
  });
}
