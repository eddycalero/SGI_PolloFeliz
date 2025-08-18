import { useRoutes } from "react-router-dom";
import { LogicRoutes } from "./LogicRoute";
import { AuthRoutes } from "./AuthRoute";
import { VisitaRoute } from "./VisitaRoute";

// ==============================|| ROUTING RENDER ||============================== //

const AppRoutes = () => {
  return useRoutes([LogicRoutes, AuthRoutes, VisitaRoute]);
};

export { AppRoutes };
