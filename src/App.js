import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CustomizedCard from './CustomizedCard';
import CustomizedPieChartCard from './CustomizedPieChartCard';
import SimpleTableCard from './SimpleTableCard';
import SimpleLineChartCard from './SimpleLineChartCard';
import CustomizedListCard from './CustomizedListCard';
import CustomShapeBarChartCard from './CustomShapeBarChartCard';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import DonutLargeOutlinedIcon from '@material-ui/icons/DonutLargeOutlined';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import FormatShapesOutlinedIcon from '@material-ui/icons/FormatShapesOutlined';
import stateData from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateData
    };// state end
    
  }// constructor close here
  
  render() {
    let dashboadCards = this.state.cardData.map(formElement => (
      <Grid key={formElement.prePrimaryHeader} item xs={6} sm={3} md={3} lg={3}>
      <CustomizedCard
      {...formElement}
      />
      </Grid>
    ));

    let dashboardLineCharts = this.state.lineChartData.map(formElement => (
      <Grid key={formElement.dataKey} item xs={12} sm={12} md={12} lg={12}>
        <SimpleLineChartCard icon={<DashboardOutlinedIcon fontSize="large"/>}
        {...formElement}
        />              
      </Grid>
    ));

    let dashboadPieCharts = this.state.pieChartData.map(formElement => (
      <Grid key={formElement.chartHeading} item xs={12} sm={12} md={4} lg={4}>
        <CustomizedPieChartCard icon={<DonutLargeOutlinedIcon fontSize="large"/>}
        {...formElement}
        />
      </Grid>
    ));

    return (
      <div>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
     <div style={{margin:"10px"}}>
     <br />
       <Grid container spacing={8} justify="space-between" style={{marginTop:"50px"}}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container spacing={24}>
            {dashboadCards}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <SimpleTableCard icon={<PeopleOutlinedIcon fontSize="large"/>} {...this.state.tableData.loginData}/>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Grid container spacing={24}>
                {dashboardLineCharts}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <SimpleTableCard icon={<ShoppingCartIcon fontSize="large"/>} {...this.state.tableData.productData}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container spacing={24}> 
           {dashboadPieCharts}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container spacing={24}> 
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <CustomizedListCard icon={<FormatShapesOutlinedIcon fontSize="large"/>}
                {...this.state.listData[0]}
              />  
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <CustomShapeBarChartCard icon={<TimelineOutlinedIcon fontSize="large"/>}
                {...this.state.CustomShapeBarChartData}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <CustomizedListCard icon={<NotificationsOutlinedIcon fontSize="large"/>}
                  {...this.state.listData[1]}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      </div>
    );
  }
}

export default App;