import React from 'react';

import CustomizedCardContainer from './CustomizedCardContainer';
//Components supported in dashboard
import SimpleTable from './SimpleTable';
import SimpleLineChart from './SimpleLineChart';
import CustomizedList from './CustomizedList';
import CustomizedCardContent from './CustomizedCardContent';
import CustomizedPieChart from './CustomizedPieChart';
import CustomShapeBarChart from './CustomShapeBarChart';

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