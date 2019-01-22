import React from 'react';
import Typography from '@material-ui/core/Typography';
import {PieChart, Pie, Sector,Cell} from 'recharts';

const renderActiveShape = (props) => {
    console.log("subuhi");
    console.log(props);
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
        fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
        <text x={cx} y={cy-10} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
        <text x={cx} y={cy+12} dy={8} textAnchor="middle" fill={fill}>
            {`(${(percent * 100).toFixed(2)}%)`}
        </text>
        <Sector
            cx={cx}
            cy={cy}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={fill}
        />
        <Sector
            cx={cx}
            cy={cy}
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={outerRadius + 6}
            outerRadius={outerRadius + 10}
            fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill={fill}>{`${value}`}</text>
        </g>
    );
};
  
class CustomizedPieChart extends React.Component{
    constructor(){
        super();
        this.state = {
            activeIndex: 0
        };
    }
    onOuterPieEnter = (data, index) => {
        console.log(data);
        console.log(index);
        this.setState({activeIndex: index});
    }
	render () {
        const {data, color} = this.props;
        return (
            <Typography  variant="caption" gutterBottom align="center">
            <PieChart width={600} height={200}>
            <Pie 
                activeIndex={this.state.activeIndex}
                activeShape={renderActiveShape} 
                data={data} 
                cx={170} 
                cy={90} 
                innerRadius={60}
                outerRadius={75} 
                fill="#fff"
                onMouseEnter={this.onOuterPieEnter}
            >
            {
                data.map((entry, index) => <Cell fill={color[index % color.length]}/>)
            }
            </Pie>
            </PieChart>
            </Typography>
        );
    }
}

export default CustomizedPieChart;

