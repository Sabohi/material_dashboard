import React from 'react';
import Typography from '@material-ui/core/Typography';
import {PieChart, Pie, Sector,Cell} from 'recharts';
import CustomizedMenu from './Menu';

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
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
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
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill={fill}>{`Value ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill={fill}>
            {`(Percent ${(percent * 100).toFixed(2)}%)`}
        </text>
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
        const {data, color, chartHeading} = this.props;
        return (
            <div>
                <Typography variant="h6" gutterBottom component="h2">
                {chartHeading}
                <span style={{float: 'right'}}>
                    <CustomizedMenu {...this.props.MenuData}/>
                </span>
                </Typography>
                <PieChart width={600} height={300}>
                <Pie 
                    activeIndex={this.state.activeIndex}
                    activeShape={renderActiveShape} 
                    data={data} 
                    cx={240} 
                    cy={130} 
                    innerRadius={70}
                    outerRadius={90} 
                    fill="#fff"
                    onMouseEnter={this.onOuterPieEnter}
                >
                {
                    data.map((entry, index) => <Cell fill={color[index % color.length]}/>)
                }
                </Pie>
               </PieChart>
            </div>
        );
    }
}

export default CustomizedPieChart;

