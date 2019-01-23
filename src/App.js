import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

//All icons available
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AllOutOutlinedIcon from '@material-ui/icons/AllOutOutlined';
import DonutLargeOutlinedIcon from '@material-ui/icons/DonutLargeOutlined';
import DonutSmallOutlinedIcon from '@material-ui/icons/DonutSmallOutlined';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import AspectRatioOutlinedIcon from '@material-ui/icons/AspectRatioOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import FormatShapesOutlinedIcon from '@material-ui/icons/FormatShapesOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import ShowChartOutlinedIcon from '@material-ui/icons/ShowChartOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';

//Actions
import FullScreenDialog from './Actions/FullScreenDialog';
import CustomizedMenu from './Actions/Menu';
//Data
import dashboardData from './Data/data';
//Rendering
import RenderLayout from './Render/RenderLayout';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =  dashboardData;
  }// constructor close here

  render() {
    let dashboard = (
      <div style={{margin:"10px"}}>
        <br />
        <Grid container spacing={24} justify="space-between" style={{marginTop:"50px"}}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container spacing={24}>
              <RenderLayout
              key = {this.state.ticketStats.id}
              columns = "4"
              headerBackground= "secondaryClass3"
              icon={<AspectRatioOutlinedIcon fontSize="large"/>}
              action={<FullScreenDialog {...this.state.ticketStats.componentData.dialogData}/>}
              {...this.state.ticketStats.componentData}
              />
              <RenderLayout
                key = {this.state.leadStats.id}
                columns = "4"
                headerBackground= "secondaryClass2"
                icon={<AttachMoneyOutlinedIcon fontSize="large"/>}
                action={<FullScreenDialog {...this.state.leadStats.componentData.dialogData}/>}
                {...this.state.leadStats.componentData}
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
                  icon={<InsertEmoticonOutlinedIcon fontSize="large"/>}
                  action={<FullScreenDialog {...this.state.userStats.componentData.dialogData}/>}
                  {...this.state.userStats.componentData}
                />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container spacing={24}>
              <RenderLayout
                key = {this.state.loginData.id}
                columns = "3"
                headerBackground= "secondaryClass4"
                icon={<PeopleOutlinedIcon fontSize="large"/>}
                action=""
                {...this.state.loginData.componentData}
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
                    key = {this.state.leads.id}
                    columns = "1"
                    headerBackground= "secondaryClass2"
                    icon={<ShowChartOutlinedIcon fontSize="large"/>}
                    action={<CustomizedMenu {...this.state.leads.componentData.MenuData}/>}
                    {...this.state.leads.componentData}
                  />
                </Grid>
              </Grid>
              <RenderLayout
                key = {this.state.productData.id}
                columns = "3"
                headerBackground= "secondaryClass1"
                icon={<ShoppingCartIcon fontSize="large"/>}
                action=""
                {...this.state.productData.componentData}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container spacing={24}> 
                <RenderLayout
                  key = {this.state.statusWiseTickets.id}
                  columns = "3"
                  headerBackground= "secondaryClass1"
                  icon={<DonutSmallOutlinedIcon fontSize="large"/>}
                  action={<CustomizedMenu {...this.state.statusWiseTickets.componentData.MenuData}/>}
                  {...this.state.statusWiseTickets.componentData}
                />
                <RenderLayout
                  key = {this.state.priorityWiseTickets.id}
                  columns = "3"
                  headerBackground= "secondaryClass4"
                  icon={<DonutLargeOutlinedIcon fontSize="large"/>}
                  action={<CustomizedMenu {...this.state.priorityWiseTickets.componentData.MenuData}/>}
                  {...this.state.priorityWiseTickets.componentData}
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
                  key = {this.state.ticketForecastData.id}
                  columns = "3"
                  headerBackground= "secondaryClass2"
                  icon={<BarChartOutlinedIcon fontSize="large"/>}
                  action=""
                  {...this.state.ticketForecastData.componentData}
                />
                <RenderLayout
                  key = {this.state.recentNotifications.id}
                  columns = "3"
                  headerBackground= "secondaryClass1"
                  icon={<NotificationsOutlinedIcon fontSize="large"/>}
                  action=""
                  {...this.state.recentNotifications.componentData}
                />
              </Grid>
        </Grid>
      </div>
    );

    return (
      <div>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Admin Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        {dashboard}
      </div>
    );
  }
}

export default App;