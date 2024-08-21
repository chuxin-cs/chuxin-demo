import routes from "./routes";
import { createBrowserRouter } from "react-router-dom";
import type { Router } from "@remix-run/router";

const router: Router = createBrowserRouter(routes);

export default router;
