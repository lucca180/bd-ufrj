import React, { PureComponent } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
} from 'recharts';

import {getCountryName} from '../../assets/countryConvert.js';

import './style.css';

const locations = require('../../assets/clean-locations.json')

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    var pais = getCountryName(locations[label]) ? getCountryName(locations[label]) : 'Unknown';
    return (
      <div className="custom-tooltip">
        <p className="label">{`${pais} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const CustomizedLabel = (props) => {
  console.log(props);

  return null;
}

export default class BarView extends PureComponent {

  render() {
  	const {data} = this.props;
        console.log(data);

    return (
      <div>
      {data.length > 0 && 
        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="Pais" />
          <YAxis/>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar name="Espectadores" dataKey="viewerCount" fill="#40bed3" />
        </BarChart>
      }
      {data.length === 0 && <i className="NoData">Não há dados para exibir</i>}
      </div>
    );
  }
}