// 同步路由
import {RouteObject} from "react-router-dom";
import DashboardLayout from "@/chuxin/layout/dashboard";

const asyncRoutes: RouteObject = {
    path: "/",
    element: (<><DashboardLayout/></>),
}

export default asyncRoutes;
