import React from "react";
import { RiBubbleChartFill } from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";
import {IoFishSharp} from 'react-icons/io5'

const Sidebar = () => {
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
      ],
    },

  ];

  return (
    <div className="max-w-2/12 h-screen sticky top-0 px-4 py-12 md:px-9 lg:px-9  flex flex-col gap-16 bg-blue-700 drop-shadow-xl ring rounded-r-3xl">
      <div className="flex flex-row gap-2 justify-center md:justify-start text-white items-center">
        <IoFishSharp className="w-10 h-10 font-semibold" />
        <div className="hidden md:block md:text-2xl font-semibold">Fishes</div>
      </div>

      {NavRoutes.map((section, index) => (
        <div
          className="flex flex-col gap-5"
          key={`section-${index}-${section.section}`}
        >
          <div className=" text-xs flex uppercase font-semibold text-white">
            {section.section}
          </div>
          <div className="flex flex-col gap-3">
            {section.routes.map((route, rdx) => (
              <div key={`section-${index}-${rdx}`}>
                <NavLink
                  to={route.path}
                  className={`flex flex-row gap-4 font-medium justify-start items-center text-indigo-200  ${
                    pathname === route.path ? " text-indigo-200" : "text-white"
                  }`}
                >
                  <route.icon className="h-4 w-4" />
                  <div className="text-xs md:text-sm lg:text-sm">
                    {route.title}
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
