import React, { Fragment, useEffect, useState } from "react";
import { BsCloudUploadFill } from "react-icons/bs";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { BiErrorAlt } from "react-icons/bi";
import { Dialog, Transition } from "@headlessui/react";
import { InfoCard, DoughnutCard, ChartCard } from "./Components";
import { useQuery, useMutation } from "react-query";
import { dashboardFetcher, fishFetcher } from "Common/fetchers";
import Files from "Assets/static/files.png";
import Template from "Assets/fishes_upload_template.xlsx";
const Explore = () => {
  let [uploadModalOpen, setUploadModalOpen] = useState(false);
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

  const {
    mutate: upload,
    isLoading: isUploading,
    isError: uploadError,
    isSuccess: uploadSucces,
    reset,
  } = useMutation(fishFetcher.upload);

  const downloadTemplate = () => {
    var link = document.createElement("a");
    link.download = "fishes_upload_template.xlsx";
    link.href = Template;
    link.click();
  };

  const onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("fishes_upload_sheet", selectedFile, selectedFile.name);

    upload(formData);

    // Request made to the backend api
    // Send formData object
  };
  useEffect(() => {
    if (!isLoading) {
    }
  }, [data, isLoading]);

  const [selectedFile, setSelectedFile] = useState();
  const onFileChange = (event) => {
    // Update the state
    setSelectedFile(event.target.files[0]);
    reset()
  };

  return (
    <div className="grid grid-row gap-8 relative w-full ml-11 mt-3">
      <div className="flex flex-row justify-between items-center">
        <div className="col-span-full text-md font-semibold text-gray-500">
          Fishes API Summary
        </div>
        <button
          type="button"
          onClick={() => setUploadModalOpen(true)}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <BsCloudUploadFill className="mr-2 -ml-1 w-5 h-5" />
          Upload Data
        </button>
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
      <Transition appear show={uploadModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => {
            setUploadModalOpen(false);
            setSelectedFile(null);
            reset();
          }}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Upload Fish Data
                </Dialog.Title>
                <div className="mt-2 flex flex-col items-center">
                  <img src={Files} alt="Files" className="w-4/5 h-auto" />
                  <p className="text-sm text-gray-500">
                    Using the template sheet, you can populate it with fish data
                    and upload it to see the data reflected
                  </p>
                  <p
                    onClick={() => downloadTemplate()}
                    className="self-start font-bold cursor-pointer hover:text-blue-700 transition-all ease-linear duration-150"
                  >
                    Download Template Here
                  </p>

                  <p className="bg-blue-400 py-2 px-3 w-full mt-2 self-start text-white rounded-lg">
                    {selectedFile?.name}
                  </p>
                </div>

                <div className="mt-4 w-full flex flex-row justify-start gap-2 items-center">
                  <label className="cursor-pointer font-semibold inline-flex justify-center px-5 py-2.5  text-sm  text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                    Upload
                    <input onChange={onFileChange} type="file" class="hidden" />
                  </label>

                  {selectedFile && (
                    <button
                      type="button"
                      onClick={() => onFileUpload()}
                      class={` translate-all ease-linear duration-75 text-white ${
                        uploadSucces
                          ? "bg-green-500"
                          : uploadError
                          ? "bg-red-500"
                          : "bg-blue-700"
                      } font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2`}
                    >
                      {isUploading ? (
                        <AiOutlineLoading3Quarters className="animate-spin mr-2 -ml-1 w-5 h-5" />
                      ) : uploadSucces ? (
                        <TiTick className="mr-2 -ml-1 w-5 h-5" />
                      ) : uploadError ? (
                        <BiErrorAlt className="mr-2 -ml-1 w-5 h-5" />
                      ) : (
                        <BsCloudUploadFill className="mr-2 -ml-1 w-5 h-5" />
                      )}
                      {isUploading
                        ? "Loading"
                        : uploadSucces
                        ? "Uploaded"
                        : uploadError
                        ? "Upload Error"
                        : "Upload"}
                    </button>
                  )}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Explore;
