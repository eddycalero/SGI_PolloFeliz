import { useRoutes } from "react-router-dom";
import { LogicRoutes } from "./LogicRoute";
import { AuthRoutes } from "./AuthRoute";


// ==============================|| ROUTING RENDER ||============================== //

const AppRoutes = () => {
  return useRoutes([AuthRoutes,LogicRoutes]);
};

export { AppRoutes };
