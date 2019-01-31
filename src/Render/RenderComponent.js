import React from 'react';

import CustomizedCardContainer from '../Components/CustomizedCardContainer';
//Components supported in dashboard
import SimpleTable from '../Components/SimpleTable';
import ComposedAreaLineChart from '../Components/ComposedAreaLineChart';
import CustomizedList from '../Components/CustomizedList';
import CustomizedCardContent from '../Components/CustomizedCardContent';
import CustomizedPieChart from '../Components/CustomizedPieChart';
import CustomShapeBarChart from '../Components/CustomShapeBarChart';
import VerticalBarChart from '../Components/VerticalBarChart';

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
        case 'areaLineChart':
            dashboardComponent = (
                <ComposedAreaLineChart {...props}/>
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
        case 'customBarChart':
            dashboardComponent = (
                <CustomShapeBarChart {...props}/>
            );
        break;
        case 'verticalBarChart':
        dashboardComponent = (
            <VerticalBarChart {...props}/>
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