import React from "react";
import { Routes } from "react-router-dom";

import {
  ExploreRoutes,
  EstimatorRoutes
} from "./Views";

const generalRoutes = [
  ExploreRoutes.main,
  EstimatorRoutes.main
];

const AppRoutes = () => {
  const routes = generalRoutes;

  return <Routes>{routes}</Routes>;
};

export default AppRoutes;
