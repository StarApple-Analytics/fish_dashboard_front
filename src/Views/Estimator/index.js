import React from "react";
import { RouteWithLayout } from "Components";
import { MainLayout } from "Layout";
import { Route } from "react-router-dom";

const EstimatorPage = React.lazy(() => import("./Estimator"));

const ExploreRoutes = {
  main: (
    <Route
      exact
      path="/estimator"
      element={
        <RouteWithLayout
          component={EstimatorPage}
          layout={MainLayout}
          path="/estimator"
          key="estimator-page"
        />
      }
    />
  ),
};

export default ExploreRoutes;
