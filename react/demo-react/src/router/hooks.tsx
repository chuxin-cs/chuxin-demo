import { RouteObject} from "react-router-dom";

import UseEffectPage from "@/pages/hooks/useEffect";
import UseContextPage from "@/pages/hooks/useContext";
import UseMemoPage from "@/pages/hooks/useMemo";
import UseLayoutEffectPage from "@/pages/hooks/useLayoutEffect";
import SuspenseLazy from "@/pages/hooks/Suspense_lazy";
import UseRefPage from "@/pages/hooks/useRef";
import UseCallbackPage from "@/pages/hooks/useCallback";
import UseReducerPage from "@/pages/hooks/useReducer";
import UseStatePage from "@/pages/hooks/useState";
import DashboardLayout from "@/chuxin/layout/dashboard/index";

const hooksRoutes: RouteObject = {
    path: "/hooks",
    element: (<DashboardLayout></DashboardLayout>),
    children: [
        {path: "useState", element: <UseStatePage/>},
        {path: "useEffect", element: <UseEffectPage/>},
        {path: "useCallback", element: <UseCallbackPage/>},
        {path: "useMemo", element: <UseMemoPage/>},
        {path: "useContext", element: <UseContextPage/>},
        {path: "useLayoutEffect", element: <UseLayoutEffectPage/>},
        {path: "suspense", element: <SuspenseLazy/>},
        {path: "useRef", element: <UseRefPage/>},
        {path: "useReducer", element: <UseReducerPage/>},
    ]
}


export default hooksRoutes;
