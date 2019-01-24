import React  from 'react';
import Typography from '@material-ui/core/Typography';
import { XAxis, YAxis, CartesianGrid, Tooltip, Area, ComposedChart, Line } from 'recharts';

class ComposedAreaLineChart extends React.Component{
	render () {
  	return (
      <Typography variant="caption" gutterBottom align="center">
        <ComposedChart 
          width={400} 
          height={265} 
          data={this.props.data}  
          // syncId="anyId"
          margin={{top: 0, right: 60, left: 0, bottom: 60}}
        >
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Area type='monotone' dataKey={this.props.key1} stroke={this.props.areaStrokeColor} fill={this.props.areaFillColor} />
          <Line type='monotone' dataKey={this.props.key2} stroke={this.props.lineStrokeColor} fill={this.props.lineFillColor}/>
        </ComposedChart>
      </Typography>
    );
  }
}

export default ComposedAreaLineChart;