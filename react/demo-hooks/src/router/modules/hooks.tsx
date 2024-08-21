import { lazy } from "react";
import LayoutIndex from "@/layouts";
import { RouteObject } from "react-router-dom";

const routesHooks: RouteObject[] = [
  {
    path: "/hooks",
    element: <LayoutIndex />,
    children: [
      {
        path: "useState",
        Component: lazy(() => import("@/pages/UseState/index")),
      },
      {
        path: "useBoolean",
        Component: lazy(() => import("@/pages/useBoolean/index")),
      },
      {
        path: "useHover",
        Component: lazy(() => import("@/pages/useHover/index")),
      },
      {
        path: "useSize",
        Component: lazy(() => import("@/pages/useSize/index")),
      },
      {
        path: "useTitle",
        Component: lazy(() => import("@/pages/useTitle/index")),
      },
      {
        path: "useToggle",
        Component: lazy(() => import("@/pages/useToggle/index")),
      },
      {
        path: "useUnmount",
        Component: lazy(() => import("@/pages/useUnmount/index")),
      },
    ],
  },
];

export default routesHooks;
