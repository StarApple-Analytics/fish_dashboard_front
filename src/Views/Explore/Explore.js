import React, {  useEffect } from "react";

import { InfoCard, DoughnutCard, ChartCard } from "./Components";
import { useQuery } from 'react-query'
import {dashboardFetcher} from 'Common/fetchers'
const Explore = () => {

  const { data, isLoading } = useQuery(dashboardFetcher.keys.fetch, ()=> dashboardFetcher.all())
  const tableheaders = ["id", "species", "height", "length", "weight", "width"];
  
  useEffect(() => {
    if (!isLoading) {
    }
  }, [data, isLoading])
  return (
    <div className="grid grid-row gap-8 relative w-full ml-11 mt-3">
      <div className="col-span-full text-md font-semibold text-gray-500">
        Fishes API Summary
      </div>
      <div className="col-span-full grid md:grid-flow-col ustify-aroundb gap-5">
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
      <div className="flex flex-row gap-4">
        <div className="w-1/3 ">
          <DoughnutCard fishes={data?.data?.unique_fishes ?? []} />
        </div>
        <div className="h-full w-2/3 max-h-fit">
          <ChartCard
            fishes_widths={data?.data?.fishes_widths ?? []}
            fishes_heights={data?.data?.fishes_heights ?? []}
            fishes_lengths={data?.data?.fishes_lengths ?? []}
          />
        </div>
      </div>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden shadow-md sm:rounded-lg">
              <table class="min-w-full">
                <thead class="bg-white">
                  <tr>
                    {tableheaders.map((ele) => (
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        {ele}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.fishes?.map(
                    ({ id, species, height, length, width }) => (
                      <tr class="bg-white border-b">
                        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                          {id}
                        </td>
                        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                          {species}
                        </td>
                        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                          {height}
                        </td>
                        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                          {length}
                        </td>
                        <td class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap ">
                          {width}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
