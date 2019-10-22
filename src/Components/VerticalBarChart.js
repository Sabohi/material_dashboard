import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell} from 'recharts';

// const VerticalBarchart = React.createClass({ See why error in this
class VerticalBarChart extends React.Component{
    render () {
      // console.log("Shivam DATA ==> ",this.props.colors);
  	return (
      <BarChart 
      layout="vertical" 
      width={400} 
      height={265} 
      data={this.props.data}
      margin={{top: 10, right: 60, left: 15, bottom: 60}}
      >
        <CartesianGrid stroke='#f5f5f5'/>
        <XAxis type="number"/>
        <YAxis dataKey="name" type="category"/>
        <Tooltip/>
        {/* <Legend/> 
        Read about legends
        */}  
        <Bar dataKey='value' barSize={8} fill='#413ea0'>
        {
              this.props.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={this.props.colors[index % 20]}/>
              ))
        }
        </Bar>
      </BarChart>
    );
  }
}

export default VerticalBarChart;


