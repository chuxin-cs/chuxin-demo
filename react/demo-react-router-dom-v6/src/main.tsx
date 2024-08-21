import ReactDOM from "react-dom/client";
import { Suspense, LazyExoticComponent, lazy } from "react";
import {
  createHashRouter, //  hash 模式
  // createBrowserRouter,// history 模式
  RouterProvider, //
  Link, // 路由跳转
  Outlet, // 路由映射  相当于 vue-router 中的 router-view
} from "react-router-dom";

interface ILazyImportComponent {
  lazyChildren: LazyExoticComponent<() => JSX.Element>;
}
const LazyImportComponent = (props: ILazyImportComponent) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <props.lazyChildren />
    </Suspense>
  );
};

function Router() {
  const router = createHashRouter([
    {
      path: "/",
      element: (
        <>
          home <Link to="about">go to about</Link>
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          about<Link to="/">go to home</Link>
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <LazyImportComponent
          lazyChildren={lazy(() => import("@/pages/Login/index.tsx"))}
        />
      ),
    },
    {
      path: "/chuxin",
      element: (
        <>
          <Outlet />
        </>
      ),
      children: [
        {
          path: "a",
          element: <>a</>,
        },
        {
          path: "b",
          element: <>b</>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Router />
  </>
);
