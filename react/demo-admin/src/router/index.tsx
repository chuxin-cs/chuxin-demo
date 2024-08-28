import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorRoutes } from "./modules/error";

function Router() {
  const routes = [ErrorRoutes];
  const router = createBrowserRouter(routes); // history 模式
  return <RouterProvider router={router} />;
}

export default Router;
