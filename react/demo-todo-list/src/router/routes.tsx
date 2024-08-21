import { lazy } from "react";
import { Outlet, Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import LazyImportComponent from "@/components/LazyImportComponent/index.tsx";

const routes: Array<RouteObject> = [
  {
    path: "/login",
    element: (
      <LazyImportComponent lazyChildren={lazy(() => import("@/pages/login"))} />
    ),
  },

  {
    path: "/4",
    element: <Navigate to={"/login"} replace={true} />,
  },

  {
    path: "/",
    element: (
      <h2>
        <Outlet />2
      </h2>
    ),
    children: [
      {
        path: "home",
        element: <h2>home</h2>,
      },
      {
        path: "about",
        element: <div>about</div>,
      },
    ],
  },
];

export default routes;
