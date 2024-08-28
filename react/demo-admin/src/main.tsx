import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// 全局css
import "./assets/styles/index.css";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
