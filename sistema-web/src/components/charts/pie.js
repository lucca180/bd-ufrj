import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Legend, Tooltip, Cell
} from 'recharts';

const COLORS = ['#FF8042', '#0088FE', '#00C49F', '#FFBB28', ];



export default class PieView extends PureComponent {

  render() {
  	const {data} = this.props;

    return (
      <PieChart width={400} height={270}>
        <Pie dataKey="genderCount" nameKey="gender" data={data} outerRadius={80} label>
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
