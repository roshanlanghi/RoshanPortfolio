import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Enable smooth scrolling
if (typeof window !== "undefined") {
  document.documentElement.style.scrollBehavior = "smooth";
}

createRoot(document.getElementById("root")!).render(<App />);
