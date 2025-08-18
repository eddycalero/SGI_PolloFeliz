import { lazy } from "react";
import Loadable from "../components/Loadable";

import MainLayout from "../ui/menu";

const DashboardDefaultPage = Loadable(
  lazy(() => import("../logic/dashboard/pages/DashboardDefaultPage"))
);

const ProductoPage = Loadable(
  lazy(() => import("../logic/product/pages/ProductoPage"))
);

const LogicRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <DashboardDefaultPage />,
    },
    {
      path: "dashboard",
      children: [
        {
          path: "default",
          element: <DashboardDefaultPage />,
        },
      ],
    },
    {
      path: "producto",
      element: <ProductoPage />,
    },
  ],
};

export { LogicRoutes };
