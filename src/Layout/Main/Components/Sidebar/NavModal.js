import React, { Fragment } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RiBubbleChartFill } from "react-icons/ri";
import { IoIosDocument } from "react-icons/io";
import { AiFillCalculator } from "react-icons/ai";

import { Dialog, Transition } from "@headlessui/react";
const NavModal = (props) => {
  const { isOpen, setIsOpen } = props;

  const closeModal = () => {
    setIsOpen(false);
  };

  const location = useLocation();
  const { pathname } = location;
  const NavRoutes = [
    {
      section: "Dashboard",
      routes: [
        {
          icon: RiBubbleChartFill,
          path: "/",
          title: "Summary",
        },
        {
          icon: AiFillCalculator,
          path: "/estimator",
          title: "Weight Estimator",
        },
      ],
    },
    {
      section: "Docmentation",
      routes: [
        {
          icon: IoIosDocument,
          path: "/tutorial",
          title: "Get Started",
        },
      ],
    },
  ];

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto "
        onClose={closeModal}
      >
        <div className="px-4 text-center">
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
            <div className="inline-block p-6 my-8  overflow-hidden text-left align-middle transition-all transform bg-blue-700 shadow-xl rounded-2xl">
              <Dialog.Title
                as="div"
                className="text-lg font-medium leading-6 text-white  w-full flex justify-end"
              >
                <button
                  onClick={closeModal}
                  className="w-6 h-6 text-black flex justify-center items-center font-black bg-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-slate-300 rounded-3xl text-sm p-2.5"
                >
                  X
                </button>
              </Dialog.Title>
              <div className="mt-2 flex flex-col gap-6 items-center justify-center w-full h-full">
                {NavRoutes.map((section, index) => (
                  <div
                    className="flex flex-col gap-2 w-full items-start justify-center"
                    key={`section-${index}-${section.section}`}
                  >
                    <div className="text-xs flex tracking-wider uppercase font-semibold text-white ">
                      {section.section}
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      {section.routes.map((route, rdx) => (
                        <NavLink
                          key={`section-${index}-${rdx}`}
                          to={route.path}
                          className={`group hover:bg-indigo-200 py-1 px-3 rounded-md transition-all ease-linear duration-75 ${
                            pathname === route.path
                              ? " text-black bg-indigo-200"
                              : "text-white bg-black"
                          }`}
                        >
                          <div className="flex flex-row gap-4 font-medium justify-start items-center">
                            <route.icon className="h-5 w-5 group-hover:text-black transition-all ease-linear duration-75" />
                            <div className="tracking-wide text-sm md:text-sm lg:text-sm group-hover:text-black transition-all ease-linear duration-75">
                              {route.title}
                            </div>
                          </div>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default NavModal;
