import React, { useEffect } from "react";

import { InfoCard, DoughnutCard, ChartCard } from "./Components";
import { useQuery } from "react-query";
import { dashboardFetcher } from "Common/fetchers";
const Explore = () => {
  const { data, isLoading } = useQuery(dashboardFetcher.keys.fetch, () =>
    dashboardFetcher.all()
  );
  const tableheaders = [
    "id",
    "species",
    "height",
    "vertical length",
    "horizontal length",
    "diagonal length",
    "weight",
    "width",
  ];

  useEffect(() => {
    if (!isLoading) {
    }
  }, [data, isLoading]);
  return (
    <div className="grid grid-row gap-8 relative w-full ml-11 mt-3">
      <div className="col-span-full text-md font-semibold text-gray-500">
        Fishes API Summary
      </div>
      <div className="col-span-full grid sm:grid-flow-col gap-5">
        <InfoCard
          title="Fishes"
          subtitle="Total"
          value={Math.round(data?.data?.total_fishes)}
        />
        <InfoCard
          title="Unique Fishes"
          subtitle="Total"
          value={Math.round(data?.data?.total_unique_fishes)}
        />
        <InfoCard
          title="Weight"
          subtitle="Total"
          value={Math.round(data?.data?.total_weight)}
        />
        <InfoCard
          title="Weight"
          subtitle="Average"
          value={Math.round(data?.data?.average_weight)}
        />
      </div>
      <div className="flex lg:flex-row sm:flex-col md:flex-col gap-4">
        <div className="h-full lg:w-2/5 sm:w-full md:w-full max-h-fit">
          <DoughnutCard fishes={data?.data?.unique_fishes ?? []} />
        </div>
        <div className="h-full lg:w-3/5 sm:w-full md:w-full max-h-fit">
          <ChartCard
            fishes_widths={data?.data?.fishes_widths ?? []}
            fishes_heights={data?.data?.fishes_heights ?? []}
            fishes_horizontalLengths={
              data?.data?.fishes_horizontal_lengths ?? []
            }
            fishes_verticalLengths={data?.data?.fishes_vertical_lengths ?? []}
            fishes_diagonalLengths={data?.data?.fishes_diagonal_lengths ?? []}
          />
        </div>
      </div>
      <div className="col-span-full">
        <table className="min-w-full">
          <thead className=" bg-blue-600 rounded-md">
            <tr>
              {tableheaders.map((ele, index) => (
                <th
                  key={`header-${index}`}
                  scope="col"
                  className="py-3 px-6 text-xs tracking-wider text-left uppercase text-white font-bold"
                >
                  {ele}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="overflow-y h-96" style={{ maxHeight: "50px" }}>
            {data?.data?.fishes?.map(
              (
                {
                  id,
                  species,
                  height,
                  vertical_length,
                  horizontal_length,
                  diagonal_length,
                  weight,
                  width,
                },
                index
              ) => (
                <tr
                  key={`row-${index}`}
                  className="bg-white border-b tracking-wider text-sm font-medium uppercase text-gray-900 even:bg-blue-100 odd:bg-blue-200"
                >
                  <td className="py-4 px-6 text-sm whitespace-nowrap">{id}</td>
                  <td className="py-4 px-6 text-sm whitespace-nowrap ">
                    {species}
                  </td>
                  <td className="py-4 px-6 text-sm whitespace-nowrap ">
                    {height}
                  </td>
                  <td className="py-4 px-6 text-sm whitespace-nowrap ">
                    {vertical_length}
                  </td>
                  <td className="py-4 px-6 text-sm whitespace-nowrap ">
                    {horizontal_length}
                  </td>
                  <td className="py-4 px-6 text-sm whitespace-nowrap ">
                    {diagonal_length}
                  </td>
                  <td className="py-4 px-6 text-sm whitespace-nowrap ">
                    {weight}
                  </td>
                  <td className="py-4 px-6 text-sm whitespace-nowrap ">
                    {width}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Explore;
