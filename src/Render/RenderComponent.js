import React from 'react';

import CustomizedCardContainer from '../Components/CustomizedCardContainer';
//Components supported in dashboard
import SimpleTable from '../Components/SimpleTable';
import SimpleLineChart from '../Components/SimpleLineChart';
import CustomizedList from '../Components/CustomizedList';
import CustomizedCardContent from '../Components/CustomizedCardContent';
import CustomizedPieChart from '../Components/CustomizedPieChart';
import CustomShapeBarChart from '../Components/CustomShapeBarChart';

const RenderComponent = props => {
    // const { classes } = props; 
    let dashboardComponent = null;

    let element = props.componentType;
    switch(element){
        case 'table':
            dashboardComponent = (
                <SimpleTable {...props}/>
            );
        break;
        case 'lineChart':
            dashboardComponent = (
                <SimpleLineChart {...props}/>
            );
        break;
        case 'list':
            dashboardComponent = (
                <CustomizedList {...props}/>
            );
        break;
        case 'pieChart':
            dashboardComponent = (
                <CustomizedPieChart {...props}/>
            );
        break;
        case 'BarChart':
            dashboardComponent = (
                <CustomShapeBarChart {...props}/>
            );
        break;
        case 'data':
        dashboardComponent = (
            <CustomizedCardContent {...props}/>
        );
        break;
        default:
    }
    return(
        <CustomizedCardContainer
            body = {dashboardComponent}
            {...props}
        />
    );
};

export default RenderComponent;