import React from "react";
import { Doughnut } from "react-chartjs-2";

function calculatePoint(i, intervalSize, colorRangeInfo) {
  var { colorStart, colorEnd, useEndAsStart } = colorRangeInfo;
  return useEndAsStart
    ? colorEnd - i * intervalSize
    : colorStart + i * intervalSize;
}

const DoughnutCard = (props) => {
  const { fishes } = props;

  const data = {
    labels: fishes?.map((ele) => ele[0]),
    datasets: [
      {
        label: "My First Dataset",
        data: fishes?.map((ele) => ele[1]),
        backgroundColor: [
          "#7C56BA",
          "#BFC347",
          "#98CC9F",
          "#5DB2C3",
          "#803517",
          "#87A151",
          "#3205F1",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "right",
      },
    },
  };
  return (
    <div className="w-full flex flex-col items-start justify-center gap-1 border-gray-100 border-2 rounded-md p-4 hover:shadow-lg transition-all ease-linear duration-100">
      <div className="font-semibold text-lg text-gray-900">
        Fish Species by numbers
      </div>
      <div className="h-full w-full self-center">
        <Doughnut
          height={"100%"}
          width={"100%"}
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default DoughnutCard;
