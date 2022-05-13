import Chart from "react-google-charts";
import React from "react";
function SankeyChart(props) {
  const {sankeyData, customClass} = props;
  let options = {
    sankey: {
      node: {
        label: {
          fontName: "sans-serif",
          fontSize: 8,
          color: "#000",
          bold: true,
          italic: false
        },
        interactivity: false // Allows you to select nodes.
      }
    }
  };
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
