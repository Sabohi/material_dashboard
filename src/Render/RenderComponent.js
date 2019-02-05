import React from 'react';

import CustomizedCardContainer from '../Components/CustomizedCardContainer';
//Components supported in dashboard
// import SimpleTable from '../Components/SimpleTable';
import CustomPaginationActionsTable from '../Components/CustomPaginationActionsTable';
import ComposedAreaLineChart from '../Components/ComposedAreaLineChart';
import CustomizedList from '../Components/CustomizedList';
import CustomizedCardContent from '../Components/CustomizedCardContent';
import CustomizedPieChart from '../Components/CustomizedPieChart';
import CustomShapeBarChart from '../Components/CustomShapeBarChart';
import VerticalBarChart from '../Components/VerticalBarChart';

class RenderComponent extends React.Component{
    render(){
        let dashboardComponent = null;
    
        let element = this.props.componentType;
        switch(element){
            case 'table':
                dashboardComponent = (
                    <CustomPaginationActionsTable {...this.props}/>
                    // <SimpleTable {...this.props}/>
                );
            break;
            case 'areaLineChart':
                dashboardComponent = (
                    <ComposedAreaLineChart {...this.props}/>
                );
            break;
            case 'list':
                dashboardComponent = (
                    <CustomizedList {...this.props}/>
                );
            break;
            case 'pieChart':
                dashboardComponent = (
                    <CustomizedPieChart {...this.props}/>
                );
            break;
            case 'customBarChart':
                dashboardComponent = (
                    <CustomShapeBarChart {...this.props}/>
                );
            break;
            case 'verticalBarChart':
            dashboardComponent = (
                <VerticalBarChart {...this.props}/>
            );
            break;
            case 'data':
            dashboardComponent = (
                <CustomizedCardContent {...this.props}/>
            );
            break;
            default:
        }
        return(
            <CustomizedCardContainer
                body = {dashboardComponent}
                {...this.props}
            />
        );
    }
}

export default RenderComponent;
