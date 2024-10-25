// @ts-ignore
import DashboardLayout from "@/chuxin/layout/dashboard/index";
import {RouterProvider, createHashRouter} from "react-router-dom"

import asyncRoutes from "./async"
import hooksRoutes from "./hooks";

export default function Router() {
    const routes = [asyncRoutes,hooksRoutes];
    const router = createHashRouter(routes);
    return <RouterProvider router={router}/>
}
