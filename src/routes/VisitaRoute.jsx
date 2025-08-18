import { lazy } from "react";
import Loadable from "../components/Loadable";

import MainLayout from "../ui/menu";

const TallerPage = Loadable(
  lazy(() => import("../logic/visita/page/TallerPage"))
);

const CalendarioPage = Loadable(
  lazy(() => import("../logic/visita/page/CalendarioPage"))
);

const AgendaPage = Loadable(
  lazy(() => import("../logic/visita/page/AgendaPage"))
);

const EmpleadoPage = Loadable(
  lazy(() => import("../logic/visita/page/EmpleadoPage"))
);

const NewTallerPage = Loadable(
  lazy(() => import("../logic/visita/page/NewTallerPage"))
);

const VisitaRoute = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/calendario",
      element: <CalendarioPage />,
    },
    {
      path: "/agenda",
      element: <AgendaPage />,
    },
    {
      path: "/taller",
      element: <TallerPage />,
    },
    {
      path: "/empleado",
      element: <EmpleadoPage />,
    },
    {
      path: "/taller/new",
      element: <NewTallerPage />,
    },
  ],
};

export { VisitaRoute };
