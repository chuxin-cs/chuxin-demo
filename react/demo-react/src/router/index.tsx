// @ts-ignore
import DashboardLayout from "@/chuxin/layout/dashboard/index";
import { RouteObject, RouterProvider, createHashRouter} from "react-router-dom"

function Router() {
    // 同步路由
    const asyncRoutes: RouteObject = {
        path: "/",
        element: (
            <>
                <DashboardLayout/>
            </>
        ),
        children: []
    }
    // 异步路由

    const routes = [
        asyncRoutes,
    ];
    const router = createHashRouter(routes);
    return <RouterProvider router={router}/>
}

export default Router


