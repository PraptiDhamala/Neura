import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Graph from "./pages/Graph";
import Planner from "./pages/Planner";
import Practice from "./pages/Practice";
import Progress from "./pages/Progress";
import Educator from "./pages/Educator";
import Preferences from "./pages/Preferences";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="graph" element={<Graph />} />
          <Route path="planner" element={<Planner />} />
          <Route path="practice" element={<Practice />} />
          <Route path="progress" element={<Progress />} />
          <Route path="educator" element={<Educator />} />
          <Route path="preferences" element={<Preferences />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
