import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar, { type Mode } from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout() {
  const [open, setOpen] = useState(false); // mobile drawer
  const [collapsed, setCollapsed] = useState(false); // desktop icon-only
  const [mode, setMode] = useState<Mode>("normal");
  const [theme, setTheme] = useState<"root" | "dark">("root");
  return (
    <div className={theme}>
      <Navbar
        mode={mode}
        onMode={setMode}
        onMenu={() => {
          if (window.innerWidth <= 900) {
            setOpen((o) => !o);
          } else {
            setCollapsed((c) => !c);
          }
        }}
        theme={theme}
        onThemeToggle={() =>
          setTheme((prev) => (prev === "root" ? "dark" : "root"))
        }
      />

      <div className="shell">
        <Sidebar
          open={open}
          collapsed={collapsed}
          onClose={() => setOpen(false)}
          onToggleCollapse={() => setCollapsed((c) => !c)}
        />

        <main>
          {mode === "exam" && <span className="pill">Exam mode on</span>}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
