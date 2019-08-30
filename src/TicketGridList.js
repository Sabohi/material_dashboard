import React from 'react';
import Grid from '@material-ui/core/Grid';

//All icons availableConfirmationNumber
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber'
import AllOutOutlinedIcon from '@material-ui/icons/AllOutOutlined';
import DonutSmallOutlinedIcon from '@material-ui/icons/DonutSmallOutlined';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined';
// import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
// import FormatShapesOutlinedIcon from '@material-ui/icons/FormatShapesOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
// import PlaylistAddCheckOutlinedIcon from '@material-ui/icons/PlaylistAddCheckOutlined';
import ViewHeadlineOutlinedIcon from '@material-ui/icons/ViewHeadlineOutlined';

import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';

//Actions
import FullScreenDialog from './Actions/FullScreenDialog';
import CustomizedMenu from './Actions/Menu';

//Rendering
import RenderLayout from './Render/RenderLayout';
class TicketGridList extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render(){
    return(      
      <Grid container style={{marginTop:"7px"}}> 
        <Grid container spacing={2} justify="space-between">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container spacing={2}>
              <RenderLayout
              key = {this.state.ticketStats.id}
              columns = "4"
              headerBackground= "color2"
              icon={<ConfirmationNumberIcon fontSize="large"/>}
              action={<CustomizedMenu {...this.state.ticketStats.componentData.actionData.menuData}/>}
              {...this.state.ticketStats.componentData} {...this.state.ticketStatsData.componentData}
              />
              <RenderLayout
                key = {this.state.taskStats.id}
                columns = "4"
                headerBackground= "color4"
                icon={<TimerOutlinedIcon fontSize="large"/>}
                action={<FullScreenDialog {...this.state.taskStats.componentData.actionData.dialogData}/>}
                {...this.state.taskStats.componentData} {...this.state.taskStatsData.componentData}
              />
              <RenderLayout
                  key = {this.state.mailStats.id}
                  columns = "4"
                  headerBackground= "color6"
                  icon={<MailOutlinedIcon fontSize="large"/>}
                  action={<FullScreenDialog {...this.state.mailStats.componentData.actionData.dialogData}/>}
                  {...this.state.mailStats.componentData} {...this.state.mailStatsData.componentData}
                />
                <RenderLayout
                  key = {this.state.userStats.id}
                  columns = "4"
                  headerBackground= "color8"
                  icon={<PeopleOutlinedIcon fontSize="large"/>}
                  action={<FullScreenDialog {...this.state.userStats.componentData.actionData.dialogData}/>}
                  {...this.state.userStats.componentData} {...this.state.userStatsData.componentData}
                />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container spacing={2}>
              <RenderLayout
                key = {this.state.issuesData.id}
                columns = "3"
                headerBackground= "color8"
                icon={<SentimentDissatisfiedOutlinedIcon fontSize="large"/>}
                action=""
                {...this.state.issues.componentData} {...this.state.issuesData.componentData}
              />
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <Grid container spacing={2}>
                  <RenderLayout
                    key = {this.state.tickets.id}
                    columns = "1"
                    headerBackground= "color6"
                    icon={<TimelineOutlinedIcon fontSize="large"/>}
                    action={<CustomizedMenu {...this.state.tickets.componentData.actionData.menuData}/>}
                    {...this.state.tickets.componentData} {...this.state.ticketsData.componentData}
                  />
                  <RenderLayout
                    key = {this.state.ticketForecastData.id}
                    columns = "1"
                    headerBackground= "color4"
                    icon={<BarChartOutlinedIcon fontSize="large"/>}
                    action=""
                    {...this.state.ticketForecast.componentData} {...this.state.ticketForecastData.componentData}
                  />
                </Grid>
              </Grid>
              <RenderLayout
                key = {this.state.issueClosersData.id}
                columns = "3"
                headerBackground= "color2"
                icon={<SentimentSatisfiedOutlinedIcon fontSize="large"/>}
                action=""
                {...this.state.issueClosers.componentData} {...this.state.issueClosersData.componentData}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container spacing={2}> 
                <RenderLayout
                  key = {this.state.priorityWiseTickets.id}
                  columns = "3"
                  headerBackground= "color2"
                  icon={<DonutSmallOutlinedIcon fontSize="large"/>}
                  action={<CustomizedMenu {...this.state.priorityWiseTickets.componentData.actionData.menuData}/>}
                  {...this.state.priorityWiseTickets.componentData} {...this.state.priorityWiseTicketsData.componentData}
                />
                <RenderLayout
                  key = {this.state.statusWiseTickets.id}
                  columns = "3"
                  headerBackground= "color8"
                  icon={<ViewHeadlineOutlinedIcon fontSize="large"/>}
                  action={<CustomizedMenu {...this.state.statusWiseTickets.componentData.actionData.menuData}/>}
                  {...this.state.statusWiseTickets.componentData} {...this.state.statusWiseTicketsData.componentData}
                />
                <RenderLayout
                  key = {this.state.tickeTypeWiseTickets.id}
                  columns = "3"
                  headerBackground= "color6"
                  icon={<AllOutOutlinedIcon fontSize="large"/>}
                  action={<CustomizedMenu {...this.state.tickeTypeWiseTickets.componentData.actionData.menuData}/>}
                  {...this.state.tickeTypeWiseTickets.componentData} {...this.state.tickeTypeWiseTicketsData.componentData}
                />
              </Grid>
            </Grid>
          {/* <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container spacing={2}> 
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
            </Grid> */}
        </Grid> 
      </Grid>
    );
  }
}

export default TicketGridList;