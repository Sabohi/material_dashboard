import React from 'react';
import Grid from '@material-ui/core/Grid';

//All icons availableConfirmationNumber
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AllOutOutlinedIcon from '@material-ui/icons/AllOutOutlined';
import DonutLargeOutlinedIcon from '@material-ui/icons/DonutLargeOutlined';
import DonutSmallOutlinedIcon from '@material-ui/icons/DonutSmallOutlined';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
// import AspectRatioOutlinedIcon from '@material-ui/icons/AspectRatioOutlined';
import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import FormatShapesOutlinedIcon from '@material-ui/icons/FormatShapesOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
// import ShowChartOutlinedIcon from '@material-ui/icons/ShowChartOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import PlaylistAddCheckOutlinedIcon from '@material-ui/icons/PlaylistAddCheckOutlined';
import ViewHeadlineOutlinedIcon from '@material-ui/icons/ViewHeadlineOutlined';

import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';

//Actions
import FullScreenDialog from './Actions/FullScreenDialog';
import CustomizedMenu from './Actions/Menu';
//Data
import ticketDashData from './Data/ticketDashData';
//Rendering
import RenderLayout from './Render/RenderLayout';

class TicketDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state =  ticketDashData;
  }// constructor close here

  render() {
    let dashboard = (
      <Grid container spacing={24} justify="space-between">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container spacing={24}>
              <RenderLayout
              key = {this.state.ticketStats.id}
              columns = "4"
              headerBackground= "secondaryClass3"
              icon={<ConfirmationNumberIcon fontSize="large"/>}
              action={<FullScreenDialog {...this.state.ticketStats.componentData.dialogData}/>}
              {...this.state.ticketStats.componentData}
              />
              <RenderLayout
                key = {this.state.escalationStats.id}
                columns = "4"
                headerBackground= "secondaryClass2"
                icon={<TimerOutlinedIcon fontSize="large"/>}
                action={<FullScreenDialog {...this.state.escalationStats.componentData.dialogData}/>}
                {...this.state.escalationStats.componentData}
              />
              <RenderLayout
                  key = {this.state.mailStats.id}
                  columns = "4"
                  headerBackground= "secondaryClass3"
                  icon={<MailOutlinedIcon fontSize="large"/>}
                  action={<FullScreenDialog {...this.state.mailStats.componentData.dialogData}/>}
                  {...this.state.mailStats.componentData}
                />
                <RenderLayout
                  key = {this.state.userStats.id}
                  columns = "4"
                  headerBackground= "secondaryClass4"
                  icon={<PeopleOutlinedIcon fontSize="large"/>}
                  action={<FullScreenDialog {...this.state.userStats.componentData.dialogData}/>}
                  {...this.state.userStats.componentData}
                />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container spacing={24}>
              <RenderLayout
                key = {this.state.issuesData.id}
                columns = "3"
                headerBackground= "secondaryClass4"
                icon={<SentimentDissatisfiedOutlinedIcon fontSize="large"/>}
                action=""
                {...this.state.issuesData.componentData}
              />
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <Grid container spacing={24}>
                  <RenderLayout
                    key = {this.state.tickets.id}
                    columns = "1"
                    headerBackground= "secondaryClass3"
                    icon={<TimelineOutlinedIcon fontSize="large"/>}
                    action={<CustomizedMenu {...this.state.tickets.componentData.MenuData}/>}
                    {...this.state.tickets.componentData}
                  />
                  <RenderLayout
                    key = {this.state.ticketForecastData.id}
                    columns = "1"
                    headerBackground= "secondaryClass2"
                    icon={<BarChartOutlinedIcon fontSize="large"/>}
                    action=""
                    {...this.state.ticketForecastData.componentData}
                  />
                </Grid>
              </Grid>
              <RenderLayout
                key = {this.state.issueClosersData.id}
                columns = "3"
                headerBackground= "secondaryClass1"
                icon={<SentimentSatisfiedOutlinedIcon fontSize="large"/>}
                action=""
                {...this.state.issueClosersData.componentData}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container spacing={24}> 
                <RenderLayout
                  key = {this.state.priorityWiseTickets.id}
                  columns = "3"
                  headerBackground= "secondaryClass1"
                  icon={<DonutSmallOutlinedIcon fontSize="large"/>}
                  action={<CustomizedMenu {...this.state.priorityWiseTickets.componentData.MenuData}/>}
                  {...this.state.priorityWiseTickets.componentData}
                />
                <RenderLayout
                  key = {this.state.statusWiseTickets.id}
                  columns = "3"
                  headerBackground= "secondaryClass4"
                  icon={<ViewHeadlineOutlinedIcon fontSize="large"/>}
                  action={<CustomizedMenu {...this.state.statusWiseTickets.componentData.MenuData}/>}
                  {...this.state.statusWiseTickets.componentData}
                />
                <RenderLayout
                  key = {this.state.tickeTypeWiseTickets.id}
                  columns = "3"
                  headerBackground= "secondaryClass3"
                  icon={<AllOutOutlinedIcon fontSize="large"/>}
                  action={<CustomizedMenu {...this.state.tickeTypeWiseTickets.componentData.MenuData}/>}
                  {...this.state.tickeTypeWiseTickets.componentData}
                />
              </Grid>
            </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container spacing={24}> 
                <RenderLayout
                  key = {this.state.recentActivitiesTicket.id}
                  columns = "3"
                  headerBackground= "secondaryClass3"
                  icon={<FormatShapesOutlinedIcon fontSize="large"/>}
                  action=""
                  {...this.state.recentActivitiesTicket.componentData}
                />
                <RenderLayout
                  key = {this.state.recentNotifications.id}
                  columns = "3"
                  headerBackground= "secondaryClass2"
                  icon={<NotificationsOutlinedIcon fontSize="large"/>}
                  action=""
                  {...this.state.recentNotifications.componentData}
                />
                <RenderLayout
                  key = {this.state.toDo.id}
                  columns = "3"
                  headerBackground= "secondaryClass1"
                  icon={<PlaylistAddCheckOutlinedIcon fontSize="large"/>}
                  action=""
                  {...this.state.toDo.componentData}
                />
              </Grid>
            </Grid>
          </Grid>
    );

    return (
      <Grid container style={{marginTop:"7px"}}> 
        {dashboard}
      </Grid>
    );
  }
}

export default TicketDashboard;