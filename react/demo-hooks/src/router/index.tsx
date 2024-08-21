import {
  createHashRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import routesList from "./routes";
export default function Router() {
  const routes = [...routesList];
  const router = createHashRouter(routes as unknown as RouteObject[]);
  return <RouterProvider router={router} />;
}
