import React, { useState } from "react";
// import { cloneDeep } from 'lodash';
import { AgChartsReact } from "ag-charts-react";

const AreaChart = () => {
  const data = [
    {
      date: new Date(2004, 3, 1),
      "Total Dollars": 304991,
    },
    {
      date: new Date(2004, 4, 1),
      "Total Dollars": 319245,
    },
    {
      date: new Date(2004, 5, 1),
      "Total Dollars": 393766,
    },
    {
      date: new Date(2004, 6, 1),
      "Total Dollars": 468903,
    },
    {
      date: new Date(2004, 7, 1),
      "Total Dollars": 512807,
    },
    {
      date: new Date(2004, 8, 1),
      "Total Dollars": 320110,
    },
    {
      date: new Date(2004, 9, 1),
      "Total Dollars": 361295,
    },
    {
      date: new Date(2004, 10, 1),
      "Total Dollars": 308698,
    },
    {
      date: new Date(2004, 11, 1),
      "Total Dollars": 274409,
    },
  ];

  const [stateOfAG, setStateOfAG] = useState({
    options: {
      autoSize: true,
      data: data,
      series: [
        {
          type: "area",
          xKey: "date",
          yKeys: ["Total Dollars"],
          fills: ["#dfe1ffe6"],
          fillOpacity: 0.8,
          strokes: ["#b8c2fa"],
        },
      ],
      axes: [
        {
          type: "time",
          position: "bottom",
        },
        {
          type: "number",
          position: "left",
          title: { text: "Total visitors" },
          tick: {
            count: 5,
          },
          label: {
            formatter: function (params) {
              return params.value / 1000 + "k";
            },
          },
        },
      ],
      legend: { position: "bottom" },
    },
  });

  return (
    <div>
      <AgChartsReact options={stateOfAG.options} />
    </div>
  );
};

export default AreaChart;
