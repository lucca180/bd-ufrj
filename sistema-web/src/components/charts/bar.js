import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
} from 'recharts';


export default class BarView extends PureComponent {

  render() {
  	const {data} = this.props;
    return (
      <BarChart
        width={600}
        height={300}
        data={data}
      >
        <XAxis dataKey="Pais" />
        <YAxis/>
        <Tooltip/>
        <Legend />
        <Bar name="Espectadores" dataKey="viewerCount" fill="#40bed3" />
      </BarChart>
    );
  }
}
