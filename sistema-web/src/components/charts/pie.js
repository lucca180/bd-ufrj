import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Legend, Tooltip,
} from 'recharts';

const data01 = [{"gender":"Female","genderCount":243},{"gender":"Male","genderCount":723},{"gender":"Non-Binary","genderCount":3}];

export default class PieView extends PureComponent {

  render() {
    return (
      <PieChart width={400} height={400}>
        <Pie dataKey="genderCount" nameKey="gender"  isAnimationActive={false} data={this.props.data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
        <Tooltip />
      </PieChart>
    );
  }
}
