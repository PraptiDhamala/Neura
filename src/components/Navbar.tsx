import { Menu, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

export type Mode = "normal" | "exam";
type Props = {
  mode: Mode;
  onMode: (m: Mode) => void;
  onMenu: () => void;
  theme: "root" | "dark";
  onThemeToggle: () => void;
};

export default function Navbar({
  mode,
  onMode,
  onMenu,
  theme,
  onThemeToggle,
}: Props) {
  return (
    <header className="navbar">
      <button className="burger" onClick={onMenu} aria-label="Open menu">
        <Menu size={35} strokeWidth={2.5} />
      </button>
      <Link to="/" className="logo">
        <span className="mark" />
        NEURA
      </Link>
      <div className="spacer" />
      <div className="seg" role="group" aria-label="Graph mode">
        <button
          aria-pressed={mode === "normal"}
          onClick={() => onMode("normal")}
        >
          Normal
        </button>
        <button aria-pressed={mode === "exam"} onClick={() => onMode("exam")}>
          Exam mode
        </button>
      </div>
      <button
        className="theme-btn"
        onClick={onThemeToggle}
        aria-label="Toggle theme"
      >
        {theme === "root" ? (
          <Moon size={28} strokeWidth={2} />
        ) : (
          <Sun size={28} strokeWidth={2} />
        )}
      </button>
    </header>
  );
}
