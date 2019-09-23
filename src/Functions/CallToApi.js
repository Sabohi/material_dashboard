//API
import {SERVER_IP, PROTOCOL, PORT, API_URL_USER} from './../Configs/apiConf';
import fetchCall from './FetchCaller';

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
    const url = new URL(`${PROTOCOL}${SERVER_IP}:${PORT}${API_URL_USER}`);
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
    fetchCall(url,fetchCallOptions,"json").then((result) => {
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


