import { lazy } from "react";
import Loadable from "../components/Loadable";

import MainLayout from "../ui/menu";


const DashboardDefaultPage = Loadable(
  lazy(() => import("../logic/dashboard/pages/DashboardDefaultPage"))
);

const ProductPage = Loadable(
  lazy(() => import("../logic/product/views/ProductView"))
);

const ProductBrandPage = Loadable(

  lazy(() => import("../logic/product/views/BrandView"))
);

const CategoryPage = Loadable(
  lazy(() => import("../logic/product/views/CategoryView"))
);

const UnitofMeasurePage = Loadable(
  lazy(() => import("../logic/product/views/UnitofMeasure"))
)

const ModelPage = Loadable(
  lazy(() => import("../logic/product/views/ModelView"))
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
      path: "product",
      element: <ProductPage />,
    },
    {
      path: "brand",
      element: <ProductBrandPage />
    },
    {
      path: "category",
      element: <CategoryPage />
    },
    {
      path: "UnitofMeasure",
      element: <UnitofMeasurePage />
    },
    {
      path: "model",
      element: <ModelPage />
    }
  ],
};

export { LogicRoutes };
