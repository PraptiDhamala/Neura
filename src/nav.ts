import { LayoutDashboard, Network, CalendarDays, PencilLine,
         BarChart3, Users, SlidersHorizontal } from "lucide-react";

export const sections = [
  { title: "Learn", items: [
    { to: "/",         label: "Dashboard",       icon: LayoutDashboard },
    { to: "/graph",    label: "Knowledge graph", icon: Network },
    { to: "/planner",  label: "Study planner",   icon: CalendarDays },
    { to: "/practice", label: "Practice",        icon: PencilLine },
    { to: "/progress", label: "Progress",        icon: BarChart3 },
  ]},
  { title: "Educator", items: [
    { to: "/educator", label: "Educator console", icon: Users },
  ]},
  { title: "Account", items: [
    { to: "/preferences", label: "Preferences and privacy", icon: SlidersHorizontal },
  ]},
];