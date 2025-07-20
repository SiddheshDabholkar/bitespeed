import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@xyflow/react/dist/style.css";
import "./index.css";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "next-themes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      storageKey="chatbot-creator-theme"
    >
      <App />
      <Toaster />
    </ThemeProvider>
  </StrictMode>
);
