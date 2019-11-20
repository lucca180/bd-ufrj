import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Legend, Tooltip, Cell
} from 'recharts';

const COLORS = ['#e91e63', '#40bed3', '#9e9e9e', ];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


export default class PieView extends PureComponent {

  render() {
  	const {data} = this.props;

    return (
      <PieChart width={400} height={270}>
        <Pie dataKey="genderCount" nameKey="gender" data={data} labelLine={false} outerRadius={80} label={renderCustomizedLabel}>
	        {
	        	data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
	        }
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom"/>
      </PieChart>
    );
  }
}