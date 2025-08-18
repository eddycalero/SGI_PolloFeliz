import { LoginPage } from "../logic/security/pages/LoginPage";
import { MinimalLayout } from "../ui/layout/MinimalLayout";

const AuthRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "/auth/login",
      element: <LoginPage />,
    },
  ],
};

export { AuthRoutes };
