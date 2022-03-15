import React, { useState } from "react";
import { useMutation } from "react-query";
import { predictionFetcher } from "Common/fetchers";
import DataProcessingIMG from "Assets/static/data_processing.png";
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
const Estimator = () => {
  const [formState, setFormState] = useState({
    verticalLength: null,
    horizonLength: null,
    diagLength: null,
    width: null,
    height: null,
  });

  
  const { mutate: predictWeight, data: predictionResult, isLoading } = useMutation(
    predictionFetcher.predict
  );

  const handleChange = (event) => {
    event.persist();

    setFormState((formState) => ({
      ...formState,
      [event.target.name]: event.target.value,
    }));
  };

  const makeEstimation = () => {
    predictWeight(formState);
  };

  return (
    <div className="grid grid-row gap-8 relative w-full ml-11 mt-3 mb-12">
      <div className="flex flex-col gap-1 col-span-full  ">
        <div className="text-md font-bold text-gray-500">
          Fish Weight Estimator
        </div>
        <div className="text-sm font-light text-gray-500 w-1/4">
          Provide the following inputs below for a fish to be passed to the
          model for weight estimation
        </div>
      </div>

      <div className="w-full flex flex-row justify-center items-center">
        <div className="h-auto w-1/3">
          <img src={DataProcessingIMG} className="" alt="Data Processing" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <input
          type="text"
          placeholder={Math.round(Math.random() * (1 - 250) + 250)}
          disabled
          value={`${Math.round(predictionResult?.data?.weight, 2) ?? "NA"}${
            predictionResult?.data?.weight ? "g" : ""
          }`}
          id="weight"
          className="animate-pulse border font-black border-b-slate-500 placeholder:text-blue-200 text-blue-500 border-b-4 text-7xl border-x-white w-72 text-center border-t-white outline-none"
        />
        <br></br>
        <label
          className="font-bold uppercase text-lg tracking-wider text-blue-500/50"
          for="weight"
        >
          Weight
        </label>
      </div>

      <div className="col-span-full flex flex-row gap-5 justify-around items-center">
        <div className="flex flex-row gap-1 justify-start items-center">
          <div className="flex flex-col justify-center items-center w-full">
            <input
              type="text"
              placeholder={Math.round(Math.random() * (1 - 250) + 250)}
              onChange={handleChange}
              name="height"
              value={formState.height}
              id="height"
              className="border font-black border-b-slate-500 placeholder:text-blue-200 text-blue-500 border-b-4 text-4xl border-x-white w-36 text-center border-t-white outline-none"
            />
            <br></br>
            <label
              className="font-bold uppercase text-lg tracking-wider text-blue-500/50"
              for="height"
            >
              Height
            </label>
          </div>
          <div className="font-bold text-black text-4xl">cm</div>
        </div>

        <div className="flex flex-row gap-1 justify-start items-center">
          <div className="flex flex-col justify-center items-center w-full">
            <input
              type="text"
              placeholder={Math.round(Math.random() * (1 - 250) + 250)}
              onChange={handleChange}
              name="width"
              value={formState.width}
              id="width"
              className="border font-black border-b-slate-500 placeholder:text-blue-200 text-blue-500 border-b-4 text-4xl border-x-white w-36 text-center border-t-white outline-none"
            />
            <br></br>
            <label
              className="font-bold uppercase text-lg tracking-wider text-blue-500/50"
              for="width"
            >
              Width
            </label>
          </div>
          <div className="font-bold text-black text-4xl">cm</div>
        </div>
        <div className="flex flex-row gap-1 justify-start items-center">
          <div className="flex flex-col justify-center items-center w-full">
            <input
              type="text"
              placeholder={Math.round(Math.random() * (1 - 250) + 250)}
              onChange={handleChange}
              name="verticalLength"
              value={formState.verticalLength}
              id="verticalLength"
              className="border font-black border-b-slate-500 placeholder:text-blue-200 text-blue-500 border-b-4 text-4xl border-x-white w-36 text-center border-t-white outline-none"
            />
            <br></br>
            <label
              className="font-bold uppercase text-lg tracking-wider text-blue-500/50"
              for="verticalLength"
            >
              Vertical Length
            </label>
          </div>
          <div className="font-bold text-black text-4xl">cm</div>
        </div>
        <div className="flex flex-row gap-1 justify-start items-center">
          <div className="flex flex-col justify-center items-center w-full">
            <input
              type="text"
              placeholder={Math.round(Math.random() * (1 - 250) + 250)}
              onChange={handleChange}
              name="horizonLength"
              value={formState.horizonLength}
              id="horizonLength"
              className="border font-black border-b-slate-500 placeholder:text-blue-200 text-blue-500 border-b-4 text-4xl border-x-white w-36 text-center border-t-white outline-none"
            />
            <br></br>
            <label
              className="font-bold uppercase text-lg tracking-wider text-blue-500/50"
              for="horizonLength"
            >
              Horizontal Length
            </label>
          </div>
          <div className="font-bold text-black text-4xl">cm</div>
        </div>
        <div className="flex flex-row gap-1 justify-start items-center">
          <div className="flex flex-col justify-center items-center w-full">
            <input
              type="text"
              placeholder={Math.round(Math.random() * (1 - 250) + 250)}
              onChange={handleChange}
              name="diagLength"
              value={formState.diagLength}
              id="diagLength"
              className="border font-black border-b-slate-500 placeholder:text-blue-200 text-blue-500 border-b-4 text-4xl border-x-white w-36 text-center border-t-white outline-none"
            />
            <br></br>
            <label
              className="font-bold uppercase text-lg tracking-wider text-blue-500/50"
              for="diagLength"
            >
              Diagonal Length
            </label>
          </div>
          <div className="font-bold text-black text-4xl">cm</div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <button
          disabled={
            formState.diagLength === null ||
            formState.height === null ||
            formState.horizonLength === null ||
            formState.verticalLength === null ||
            formState.width === null
          }
          onClick={() => makeEstimation()}
          type="button"
          className=" bg-blue-800 text-white uppercase w-1/4 py-6 rounded-lg font-semibold text-xl disabled:bg-blue-300 flex flex-row gap-3 justify-center items-center"
        >
          {isLoading && <AiOutlineLoading3Quarters className="animate-spin w-8 h-8" />}
          Estimate
        </button>
      </div>
    </div>
  );
};

export default Estimator;
