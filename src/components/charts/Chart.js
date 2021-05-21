import React, { useState } from "react";
// import { cloneDeep } from 'lodash';
import { AgChartsReact } from "ag-charts-react";

const Chart = () => {
  const data = [
    { year: "2015", users: 18023312 },
    { year: "2016", users: 17271912 },
    { year: "2017", users: 17155093 },
    { year: "2018", users: 19441678 },
    { year: "2019", users: 20368190 },
  ];

  const [stateOfAG, setStateOfAG] = useState({
    options: {
      autoSize: true,
      data: data,
      // title: {
      //   text: ,
      //   fontSize: 12,
      // },
      // subtitle: {
      //   text: "",
      // },
      series: [
        {
          type: "column",
          xKey: "year",
          yKeys: ["users"],
          fills: ["#0084e7"],
          strokes: ["#00407f"],
          shadow: {
            enabled: true,
            xOffset: 3,
          },
        },
      ],
      axes: [
        {
          type: "category",
          position: "bottom",
          title: { text: "Year" },
        },
        {
          type: "number",
          position: "left",
          title: { text: "Total users" },
          tick: {
            count: 3,
          },
          label: {
            formatter: function (params) {
              return params.value / 1000000 + "M";
            },
          },
        },
      ],
      axis: {
        tick: {
          count: 5,
        },
      },
      legend: { enabled: false },
    },
  });

  return (
    <>
      <AgChartsReact options={stateOfAG.options} />
    </>
  );
};

export default Chart;
