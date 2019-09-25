//API
import {SERVER_IP, PROTOCOL, PORT, API_URL_USER, API_URL_TICKET_LEAD, API_URL_TASK, API_URL_MAIL} from './../Configs/apiConf';
import fetchCall from './FetchCaller';

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
    console.log('here');
    console.log(result); 
    let resultData = JSON.parse(result);

    switch(type){
      case 'ticket':
        infoRequired = 'ticketStatsData';
        dashboardDataCopy = {...COMPONENT.state.ticketDashboardData};

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

    // console.log(resultData);

      
    // if(type == 'ticket'){
    //   COMPONENT.setState({
    //     ticketDashboardData : dashboardDataCopy
    //   });
    // }else if(type == 'lead'){
    //   COMPONENT.setState({
    //     leadDashboardData : dashboardDataCopy
    //   });
    // }
  },
  (error) => {
      // COMPONENT.setState({
      //       IS_LOADING: false,
      //     });
  });
}
export const taskData = (type,timePeriod,COMPONENT) => {
  let infoRequired = 'taskStatsData';
  let dashboardDataCopy = {};
  switch(type){
    case 'ticket':
      dashboardDataCopy = {...COMPONENT.state.ticketDashboardData};
    break;
    case 'lead':
      dashboardDataCopy = {...COMPONENT.state.leadDashboardData};
    break;
  }

  const url_ticket_lead = new URL(`${PROTOCOL}${SERVER_IP}:${PORT}${API_URL_TASK}`);
  console.log('url_ticket_lead url',`${PROTOCOL}${SERVER_IP}:${PORT}${API_URL_TASK}`);
  const fetchCallOptions = {
      method: "POST",
      // credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: '1477037397668528128',
        reqType: 'getTasksInfo',   
        infoRequired: infoRequired,   
        timePeriod: timePeriod,   
      })
  };
  fetchCall(url_ticket_lead,fetchCallOptions,"json").then((result) => {
    console.log('here');
    console.log(result); 
    let resultData = JSON.parse(result);

    switch(type){
      case 'ticket':
        infoRequired = 'ticketStatsData';
        dashboardDataCopy = {...COMPONENT.state.ticketDashboardData};

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

    // console.log(resultData);

      
    // if(type == 'ticket'){
    //   COMPONENT.setState({
    //     ticketDashboardData : dashboardDataCopy
    //   });
    // }else if(type == 'lead'){
    //   COMPONENT.setState({
    //     leadDashboardData : dashboardDataCopy
    //   });
    // }
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
        reqType: 'getMailsInfo',   //Put in config
        infoRequired: infoRequired,   
        timePeriod: timePeriod,   
      })
  };
  fetchCall(url_ticket_lead,fetchCallOptions,"json").then((result) => {
    console.log('here');
    console.log(result); 
    let resultData = JSON.parse(result);

    switch(type){
      case 'ticket':
        infoRequired = 'ticketStatsData';
        dashboardDataCopy = {...COMPONENT.state.ticketDashboardData};

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

    // console.log(resultData);

      
    // if(type == 'ticket'){
    //   COMPONENT.setState({
    //     ticketDashboardData : dashboardDataCopy
    //   });
    // }else if(type == 'lead'){
    //   COMPONENT.setState({
    //     leadDashboardData : dashboardDataCopy
    //   });
    // }
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

      let resultData = JSON.parse(result);

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



