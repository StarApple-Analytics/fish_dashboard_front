import React from "react";
import { Bar } from "react-chartjs-2";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ChartCard = (props) => {
  const { fishes_lengths, fishes_widths, fishes_heights } = props;


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const heightsLabels = fishes_heights?.map(({ species }) => species);
  const widthsLabels = fishes_widths?.map(({ species }) => species);
  const lengthLabels = fishes_widths?.map(({ species }) => species);

  const heightData = {
    labels: heightsLabels,
    datasets: [
      {
        label: "Species Average Height",
        data: fishes_heights.map(({avg_height}) => avg_height),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Species Maximum Height",
        data: fishes_heights.map(({max_height}) => max_height),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const widthData = {
    labels:widthsLabels,
    datasets: [
      {
        label: "Species Average Width",
        data: fishes_widths.map(({avg_width}) => avg_width),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Species Maximum Width",
        data: fishes_widths.map(({max_width}) => max_width),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const lengthData = {
    labels: lengthLabels,
    datasets: [
      {
        label: "Species Average Length",
        data: fishes_lengths.map(({avg_length}) => avg_length),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Species Maximum Length",
        data: fishes_lengths.map(({max_length}) => max_length),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };



  return (
    <div className="h-full w-full flex flex-col items-start justify-start gap-1 border-gray-100 border-2 rounded-md p-4 hover:shadow-lg transition-all ease-linear duration-100">
      <Tab.Group>
        <div className="flex flex-row gap-4 space-between w-full">
          <div className="font-semibold text-lg text-gray-900">
            Fish Species by numbers
          </div>
          <Tab.List className="flex flex-row w-full">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full border-gray-300 text-sm leading-5 font-medium text-blue-900 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-600 ring-gray-400 ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-blue-900"
                )
              }
            >
              Height
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full border-gray-300 text-sm leading-5 font-medium text-blue-900 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-600 ring-gray-400 ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-blue-900"
                )
              }
            >
              Length
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full border-gray-300 text-sm leading-5 font-medium text-blue-900 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-600 ring-gray-400 ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-blue-900"
                )
              }
            >
              Width
            </Tab>
          </Tab.List>
        </div>
        <Tab.Panels className="w-full h-1/2 self-center">
          <Tab.Panel className="w-full h-1/2 self-center">
            <Bar
              width={"100%"}
              height={"50%"}
              data={heightData}
              options={options}
            />
          </Tab.Panel>
          <Tab.Panel className="w-full h-1/2 self-center">
            <Bar
              width={"100%"}
              height={"50%"}
              data={lengthData}
              options={options}
            />
          </Tab.Panel>
          <Tab.Panel className="w-full h-1/2 self-center">
            <Bar
              width={"100%"}
              height={"50%"}
              data={widthData}
              options={options}
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ChartCard;
