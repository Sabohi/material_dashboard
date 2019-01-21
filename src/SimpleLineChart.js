import React  from 'react';
import Typography from '@material-ui/core/Typography';
import { XAxis, YAxis, CartesianGrid, Tooltip, Area, AreaChart } from 'recharts';
// import CustomizedMenu from './Menu';

class SimpleLineChart extends React.Component{
	render () {
  	return (
      <Typography variant="caption" gutterBottom align="center">
      <AreaChart width={400} height={200} data={this.props.data}  syncId="anyId"
            margin={{top: 0, right: 60, left: 0, bottom: 60}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Area type='monotone' dataKey={this.props.dataKey} stroke={this.props.strokeColor} fill={this.props.fillColor} />
      </AreaChart>
      </Typography>
    );
  }
}

export default SimpleLineChart;

