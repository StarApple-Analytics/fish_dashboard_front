import React from "react";
import { RiZoomInFill } from "react-icons/ri";
import Latex from "react-latex";

const Tutorial = () => {
  return (
    <div className="grid grid-flow-row justify-center items-center gap-14 relative w-full p-8">
      <div className=" row-span-1 gap-3 flex-col flex tracking-wide">
        <div className="text-slate-800 font-semibold text-sm">Overview</div>
        <div className=" text-black font-black text-3xl w-2/3">
          Multiple Linear Regression Model To Estimate The Weight Of Fishes
        </div>
        <div className="text-gray-700 text-xl font-light w-2/3">
          For this dashboard we used a dataset that contains data on various
          species of fish which consists of their Species, Weight, Wdith and
          Varying Lengths Using the
          <a
            className="font-semibold"
            href="https://scikit-learn.org/stable/index.html"
          >
            Scikit-Learn library
          </a>
          , we were able to create our analysis and{" "}
          <a
            className="font-semibold"
            href="https://www.scribbr.com/statistics/multiple-linear-regression/"
          >
            Multilinear Regression Model
          </a>{" "}
          that could estimate weight of fishes
        </div>
      </div>
      <div className="row-span-1 gap-6 flex-col flex justify-center items-start tracking-wide">
        <div className="text-slate-800 font-semibold text-sm">Assumptions</div>
        <ol className="relative border-l border-gray-200 ml-4">
          <li className="mb-10 ml-9 flex flex-col gap-1">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-slate-200 ">
              <RiZoomInFill className="w-3 h-3 text-blue-600" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900">
              Species: Name of Fish's Species
            </h3>
          </li>
          <li className="mb-10 ml-9 flex flex-col gap-1">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-slate-200 ">
              <RiZoomInFill className="w-3 h-3 text-blue-600" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900">
              Weight: Weight of the fish /g
            </h3>
          </li>
          <li className="mb-10 ml-9 flex flex-col gap-1">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-slate-200 ">
              <RiZoomInFill className="w-3 h-3 text-blue-600" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900">
              Length1: Vertical Length /cm
            </h3>
          </li>
          <li className="mb-10 ml-9 flex flex-col gap-1">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-slate-200 ">
              <RiZoomInFill className="w-3 h-3 text-blue-600" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900">
              Length2: Diagonal Length /cm
            </h3>
          </li>
          <li className="mb-10 ml-9 flex flex-col gap-1">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-slate-200 ">
              <RiZoomInFill className="w-3 h-3 text-blue-600" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900">
              Length3: Horizontal Length /cm
            </h3>
          </li>
          <li className="mb-10 ml-9 flex flex-col gap-1">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-slate-200 ">
              <RiZoomInFill className="w-3 h-3 text-blue-600" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900">
              Height: Height /cm
            </h3>
          </li>
          <li className="mb-10 ml-9 flex flex-col gap-1">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-slate-200 ">
              <RiZoomInFill className="w-3 h-3 text-blue-600" />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900">
              Width: Width /cm
            </h3>
          </li>
        </ol>
      </div>
      <div className=" row-span-1 gap-3 flex-col flex tracking-wide">
        <div className="text-slate-800 font-semibold text-sm">
          Regression Analysis Used
        </div>
        <div className="flex flex-col gap-2">
          <Latex>$y = ax+b$</Latex>
          <Latex>$y = Target/Dependent$</Latex>
          <Latex>$x = Feature/Independent/Selector$</Latex>
          <Latex className="mt-6">$a,b=parameters$</Latex>
          <div className=" italic font-light text-sm">
            Simple equation of a line (regression formula)
          </div>
          <Latex className="mt-2">
            $y = a_1x_1+a_2x_2+a_3x_3+...+a_nx_n + b$
          </Latex>
          <div className=" italic font-light text-sm">
            Equation for Multilinear Regression (Linear Regression In Higher
            Dimensions)
          </div>
        </div>
      </div>
      <div className=" row-span-1 gap-3 flex-col flex tracking-wide">
        <div className="text-slate-800 font-semibold text-sm">
          Weight Estimator Tool
        </div>
        <div className=" text-black font-black text-3xl w-2/3">
          Using the Fish Weight Estimator
        </div>
        <div className="text-gray-700 text-xl font-light w-2/3">
          The estimator expects the following values: height, width, vertical
          length, horizontal length and diagonal length. These values will be
          passed to the model on the API side, and a predicted value will be
          sent back to the client
        </div>
        <a href="https://gyazo.com/40e3252cac7ed1fff938722426c7ecfe">
          <img
            src="https://i.gyazo.com/40e3252cac7ed1fff938722426c7ecfe.gif"
            alt="Using Fsh Weight Estimator"
            width="1600"
          />
        </a>
      </div>
    </div>
  );
};

export default Tutorial;
