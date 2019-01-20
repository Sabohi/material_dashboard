import React  from 'react';
import Typography from '@material-ui/core/Typography';
import { XAxis, YAxis, CartesianGrid, Tooltip, Area, AreaChart } from 'recharts';
import CustomizedMenu from './Menu';

class SimpleLineChart extends React.Component{
	render () {
  	return (
      <div>
        <Typography variant="h6" gutterBottom component="h2">
          {this.props.dataKey}
          <span style={{float: 'right'}}>
            <CustomizedMenu {...this.props.MenuData}/>
          </span>
        </Typography>
        <AreaChart width={400} height={200} data={this.props.data} syncId="anyId"
              margin={{top: 0, right: 0, left: 0, bottom: 0}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Area type='monotone' dataKey={this.props.dataKey} stroke={this.props.strokeColor} fill={this.props.fillColor} />
        </AreaChart>
    </div>
    );
  }
}

export default SimpleLineChart;

