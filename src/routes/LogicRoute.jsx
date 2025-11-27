import { lazy } from "react";
import Loadable from "../components/Loadable";
import MainLayout from "../ui/menu";

const DashboardDefaultPage = Loadable(
  lazy(() => import("../logic/dashboard/pages/DashboardDefaultPage"))
);

const UnitofMeasurePage = Loadable(
  lazy(() => import("../logic/product/views/UnitMeasureView"))
)

const CategoryPage = Loadable(
  lazy(() => import("../logic/product/views/CategoryView"))
)


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
      path: "UnitofMeasure",
      element: <UnitofMeasurePage />
    },
    {
      path: "category",
      element: <CategoryPage />
    },
  ],
};

export { LogicRoutes };
