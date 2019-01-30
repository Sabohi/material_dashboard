import React from 'react';
import Grid from '@material-ui/core/Grid';

//All icons availableConfirmationNumber
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AllOutOutlinedIcon from '@material-ui/icons/AllOutOutlined';
import DonutSmallOutlinedIcon from '@material-ui/icons/DonutSmallOutlined';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import FormatShapesOutlinedIcon from '@material-ui/icons/FormatShapesOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import PlaylistAddCheckOutlinedIcon from '@material-ui/icons/PlaylistAddCheckOutlined';
import ViewHeadlineOutlinedIcon from '@material-ui/icons/ViewHeadlineOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';

//Actions
import FullScreenDialog from './Actions/FullScreenDialog';
import CustomizedMenu from './Actions/Menu';

//Rendering
import RenderLayout from './Render/RenderLayout';

const LeadGridList = props => {
    return(
        <Grid container spacing={24} justify="space-between">
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Grid container spacing={24}>
                    <RenderLayout
                    key = {props.leadStats.id}
                    columns = "4"
                    headerBackground= "secondaryClass3"
                    icon={<ConfirmationNumberIcon fontSize="large"/>}
                    action={<FullScreenDialog {...props.leadStats.componentData.dialogData}/>}
                    {...props.leadStats.componentData}
                    />
                    <RenderLayout
                    key = {props.escalationStats.id}
                    columns = "4"
                    headerBackground= "secondaryClass2"
                    icon={<TimerOutlinedIcon fontSize="large"/>}
                    action={<FullScreenDialog {...props.escalationStats.componentData.dialogData}/>}
                    {...props.escalationStats.componentData}
                    />
                    <RenderLayout
                        key = {props.mailStats.id}
                        columns = "4"
                        headerBackground= "secondaryClass3"
                        icon={<MailOutlinedIcon fontSize="large"/>}
                        action={<FullScreenDialog {...props.mailStats.componentData.dialogData}/>}
                        {...props.mailStats.componentData}
                    />
                    <RenderLayout
                        key = {props.userStats.id}
                        columns = "4"
                        headerBackground= "secondaryClass4"
                        icon={<PeopleOutlinedIcon fontSize="large"/>}
                        action={<FullScreenDialog {...props.userStats.componentData.dialogData}/>}
                        {...props.userStats.componentData}
                    />
                </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                <Grid container spacing={24}>
                    <RenderLayout
                    key = {props.topLeads.id}
                    columns = "3"
                    headerBackground= "secondaryClass4"
                    icon={<AttachMoneyOutlinedIcon fontSize="large"/>}
                    action=""
                    {...props.topLeads.componentData}
                    />
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Grid container spacing={24}>
                        <RenderLayout
                        key = {props.leads.id}
                        columns = "1"
                        headerBackground= "secondaryClass3"
                        icon={<TimelineOutlinedIcon fontSize="large"/>}
                        action={<CustomizedMenu {...props.leads.componentData.MenuData}/>}
                        {...props.leads.componentData}
                        />
                        <RenderLayout
                        key = {props.leadForecastData.id}
                        columns = "1"
                        headerBackground= "secondaryClass2"
                        icon={<BarChartOutlinedIcon fontSize="large"/>}
                        action=""
                        {...props.leadForecastData.componentData}
                        />
                    </Grid>
                    </Grid>
                    <RenderLayout
                    key = {props.topProductData.id}
                    columns = "3"
                    headerBackground= "secondaryClass1"
                    icon={<ShoppingCartIcon fontSize="large"/>}
                    action=""
                    {...props.topProductData.componentData}
                    />
                </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                <Grid container spacing={24}> 
                    <RenderLayout
                        key = {props.stateWiseLeads.id}
                        columns = "3"
                        headerBackground= "secondaryClass1"
                        icon={<DonutSmallOutlinedIcon fontSize="large"/>}
                        action={<CustomizedMenu {...props.stateWiseLeads.componentData.MenuData}/>}
                        {...props.stateWiseLeads.componentData}
                    />
                    <RenderLayout
                        key = {props.statusWiseLeads.id}
                        columns = "3"
                        headerBackground= "secondaryClass4"
                        icon={<ViewHeadlineOutlinedIcon fontSize="large"/>}
                        action={<CustomizedMenu {...props.statusWiseLeads.componentData.MenuData}/>}
                        {...props.statusWiseLeads.componentData}
                    />
                    <RenderLayout
                        key = {props.dispositionWiseLeads.id}
                        columns = "3"
                        headerBackground= "secondaryClass3"
                        icon={<AllOutOutlinedIcon fontSize="large"/>}
                        action={<CustomizedMenu {...props.dispositionWiseLeads.componentData.MenuData}/>}
                        {...props.dispositionWiseLeads.componentData}
                    />
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                <Grid container spacing={24}> 
                    <RenderLayout
                        key = {props.recentActivitiesTicket.id}
                        columns = "3"
                        headerBackground= "secondaryClass3"
                        icon={<FormatShapesOutlinedIcon fontSize="large"/>}
                        action=""
                        {...props.recentActivitiesTicket.componentData}
                    />
                    <RenderLayout
                        key = {props.recentNotifications.id}
                        columns = "3"
                        headerBackground= "secondaryClass2"
                        icon={<NotificationsOutlinedIcon fontSize="large"/>}
                        action=""
                        {...props.recentNotifications.componentData}
                    />
                    <RenderLayout
                        key = {props.toDo.id}
                        columns = "3"
                        headerBackground= "secondaryClass1"
                        icon={<PlaylistAddCheckOutlinedIcon fontSize="large"/>}
                        action=""
                        {...props.toDo.componentData}
                    />
                    </Grid>
            </Grid>
        </Grid>
    );
}

export default LeadGridList;