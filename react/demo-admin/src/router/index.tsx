import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorRoutes } from "./modules/error";

function Router() {
  const routes = [
    {
      path: "/",
      element: <>111</>,
    },
    ErrorRoutes,
  ];
  // history 模式
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default Router;
