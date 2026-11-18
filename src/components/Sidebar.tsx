import { NavLink } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { sections } from "../nav";

type Props = {
  open: boolean;
  collapsed: boolean;
  onClose: () => void;
  onToggleCollapse: () => void;
};

export default function Sidebar({
  open,
  collapsed,
  onClose,
  onToggleCollapse,
}: Props) {
  return (
    <>
      {open && <div className="overlay" onClick={onClose} />}
      <aside
        className={`sidebar ${open ? "open" : ""} ${collapsed ? "collapsed" : ""}`}
      >
        <nav aria-label="Main navigation">
          {sections.map((s) => (
            <div key={s.title}>
              <p className="section">{s.title}</p>
              {s.items.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  title={label}
                  className="item"
                  onClick={onClose}
                >
                  <Icon size={20} />
                  <span className="label">{label}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </nav>
        <button
          className="collapse-btn"
          onClick={onToggleCollapse}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <ChevronLeft size={18} />
        </button>
      </aside>
    </>
  );
}
