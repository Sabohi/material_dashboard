import React from 'react';
// import Typography from '@material-ui/core/Typography';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
          Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill}/>;
};

class CustomShapeBarChart extends React.Component{
	render () {
  	return (
        <BarChart width={400} height={250} data={this.props.data}
            margin={{top: 0, right: 60, left: 0, bottom: 0}}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Bar dataKey="tickets" fill="#8884d8" shape={<TriangleBar/>} label={{ position: 'top' }}>
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

export default CustomShapeBarChart;

