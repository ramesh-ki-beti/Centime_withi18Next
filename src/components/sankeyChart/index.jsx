import Chart from "react-google-charts";
import React from "react";
import { colors } from '../../app/constants';

function SankeyChart(props) {
  const {sankeyData, customClass, options} = props;
  return (
    <div className={customClass} data-testid='SankeyChart-div-container'>
      <Chart
        chartType="Sankey"
        width="100%"
        height="200px"
        data={sankeyData}
        options={options}
        data-testid='SankeyChart-chart-render'
      />
    </div>
  );
}

export default SankeyChart;
