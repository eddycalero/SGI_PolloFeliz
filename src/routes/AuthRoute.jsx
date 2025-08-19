
import { LoginPage } from "../logic/security/pages/LoginPage";
import { MinimalLayout } from "../ui/layout/MinimalLayout";

const AuthRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path:"/auth/login",
      children:[
        {
          path:"default",
          element: <LoginPage/>
        },
      ],
    }
  ],
};

export { AuthRoutes };
