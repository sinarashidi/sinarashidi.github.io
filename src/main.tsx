import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Initialize theme before React renders to prevent flash
function initializeTheme() {
  const THEME_STORAGE_KEY = "theme-preference";
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  const root = document.documentElement;
  
  let shouldBeDark = false;
  
  if (stored === "dark") {
    shouldBeDark = true;
  } else if (stored === "light") {
    shouldBeDark = false;
  } else {
    // system preference
    shouldBeDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  
  if (shouldBeDark) {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

initializeTheme();

createRoot(document.getElementById("root")!).render(<App />);
