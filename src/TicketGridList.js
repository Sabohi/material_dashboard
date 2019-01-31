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

const TicketGridList = (props,index) => {
  return(      
    <Grid container style={{marginTop:"7px"}}> 
      <Grid container spacing={24} justify="space-between">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container spacing={24}>
            <RenderLayout
            key = {props.ticketStats.id}
            dataKey = {props.ticketStats.id}
            columns = "4"
            headerBackground= "color2"
            icon={<ConfirmationNumberIcon fontSize="large"/>}
            action={<FullScreenDialog {...props.ticketStats.componentData.dialogData}/>}
            {...props.ticketStats.componentData}
            />
            <RenderLayout
              key = {props.taskStats.id}
              dataKey = {props.taskStats.id}
              columns = "4"
              headerBackground= "color4"
              icon={<TimerOutlinedIcon fontSize="large"/>}
              action={<FullScreenDialog {...props.taskStats.componentData.dialogData}/>}
              {...props.taskStats.componentData}
            />
            <RenderLayout
                key = {props.mailStats.id}
                dataKey = {props.mailStats.id}
                columns = "4"
                headerBackground= "color6"
                icon={<MailOutlinedIcon fontSize="large"/>}
                action={<FullScreenDialog {...props.mailStats.componentData.dialogData}/>}
                {...props.mailStats.componentData}
              />
              <RenderLayout
                key = {props.userStats.id}
                dataKey = {props.userStats.id}
                columns = "4"
                headerBackground= "color8"
                icon={<PeopleOutlinedIcon fontSize="large"/>}
                action={<FullScreenDialog {...props.userStats.componentData.dialogData}/>}
                {...props.userStats.componentData}
              />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container spacing={24}>
            <RenderLayout
              key = {props.issuesData.id}
              dataKey = {props.issuesData.id}
              columns = "3"
              headerBackground= "color8"
              icon={<SentimentDissatisfiedOutlinedIcon fontSize="large"/>}
              action=""
              {...props.issuesData.componentData}
            />
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Grid container spacing={24}>
                <RenderLayout
                  key = {props.tickets.id}
                  dataKey = {props.tickets.id}
                  columns = "1"
                  headerBackground= "color6"
                  icon={<TimelineOutlinedIcon fontSize="large"/>}
                  action={<CustomizedMenu {...props.tickets.componentData.MenuData}/>}
                  {...props.tickets.componentData}
                />
                <RenderLayout
                  key = {props.ticketForecastData.id}
                  dataKey = {props.ticketForecastData.id}
                  columns = "1"
                  headerBackground= "color4"
                  icon={<BarChartOutlinedIcon fontSize="large"/>}
                  action=""
                  {...props.ticketForecastData.componentData}
                />
              </Grid>
            </Grid>
            <RenderLayout
              key = {props.issueClosersData.id}
              dataKey = {props.issueClosersData.id}
              columns = "3"
              headerBackground= "color2"
              icon={<SentimentSatisfiedOutlinedIcon fontSize="large"/>}
              action=""
              {...props.issueClosersData.componentData}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container spacing={24}> 
              <RenderLayout
                key = {props.priorityWiseTickets.id}
                dataKey = {props.priorityWiseTickets.id}
                columns = "3"
                headerBackground= "color2"
                icon={<DonutSmallOutlinedIcon fontSize="large"/>}
                action={<CustomizedMenu {...props.priorityWiseTickets.componentData.MenuData}/>}
                {...props.priorityWiseTickets.componentData}
              />
              <RenderLayout
                key = {props.statusWiseTickets.id}
                dataKey = {props.statusWiseTickets.id}
                columns = "3"
                headerBackground= "color8"
                icon={<ViewHeadlineOutlinedIcon fontSize="large"/>}
                action={<CustomizedMenu {...props.statusWiseTickets.componentData.MenuData}/>}
                {...props.statusWiseTickets.componentData}
              />
              <RenderLayout
                key = {props.tickeTypeWiseTickets.id}
                dataKey = {props.tickeTypeWiseTickets.id}
                columns = "3"
                headerBackground= "color6"
                icon={<AllOutOutlinedIcon fontSize="large"/>}
                action={<CustomizedMenu {...props.tickeTypeWiseTickets.componentData.MenuData}/>}
                {...props.tickeTypeWiseTickets.componentData}
              />
            </Grid>
          </Grid>
        {/* <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container spacing={24}> 
              <RenderLayout
                key = {props.recentActivitiesTicket.id}
                dataKey = {props.recentActivitiesTicket.id}
                columns = "3"
                headerBackground= "secondaryClass3"
                icon={<FormatShapesOutlinedIcon fontSize="large"/>}
                action=""
                {...props.recentActivitiesTicket.componentData}
              />
              <RenderLayout
                key = {props.recentNotifications.id}
                dataKey = {props.recentNotifications.id}
                columns = "3"
                headerBackground= "secondaryClass2"
                icon={<NotificationsOutlinedIcon fontSize="large"/>}
                action=""
                {...props.recentNotifications.componentData}
              />
              <RenderLayout
                key = {props.toDo.id}
                dataKey = {props.toDo.id}
                columns = "3"
                headerBackground= "secondaryClass1"
                icon={<PlaylistAddCheckOutlinedIcon fontSize="large"/>}
                action=""
                {...props.toDo.componentData}
              />
            </Grid>
          </Grid> */}
      </Grid> 
    </Grid>
  );
};

export default TicketGridList;