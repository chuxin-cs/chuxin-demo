import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

const Page403 = lazy(() => import("@/pages/sys/error/Pages403"));
const Page404 = lazy(() => import("@/pages/sys/error/Pages404"));
const Page500 = lazy(() => import("@/pages/sys/error/Pages500"));

export const ErrorRoutes: RouteObject = {
  element: (
    <>
      <Suspense fallback={<>加载中...</>}>
        <Outlet />
      </Suspense>
    </>
  ),
  children: [
    { path: "403", element: <Page403 /> },
    { path: "404", element: <Page404 /> },
    { path: "500", element: <Page500 /> },
  ],
};
