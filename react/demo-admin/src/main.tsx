import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// 全局css
import "./assets/styles/index.css";

createRoot(document.getElementById("root")!).render(<App />);
