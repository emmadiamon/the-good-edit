import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/contact", label: "Contact" },
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-30 bg-cream/90 backdrop-blur border-b border-espresso/10">
        <div className="mx-auto max-w-7xl px-5 h-16 flex items-center justify-between">
          <Link to="/" className="font-display text-2xl font-semibold tracking-tight">The Good Edit</Link>
          <nav className="hidden md:flex gap-8 text-sm" aria-label="Main">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={({ isActive }) => `hover:text-olive ${isActive ? "text-olive underline underline-offset-8" : ""}`}>{l.label}</NavLink>
            ))}
          </nav>
          <button className="md:hidden p-2 -mr-2" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="md:hidden border-t border-espresso/10 px-5 py-4 flex flex-col gap-4 text-lg" aria-label="Mobile">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</NavLink>
            ))}
          </nav>
        )}
      </header>
      <main className="flex-1"><Outlet /></main>
      <footer className="bg-espresso text-cream mt-24">
        <div className="mx-auto max-w-7xl px-5 py-14 grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl">The Good Edit</p>
            <p className="mt-2 text-cream/70">Good things deserve a second home.</p>
          </div>
          <p className="text-cream/70 text-sm">Local pickup only. No shipping. Exact address shared after your purchase is confirmed.</p>
          <Link to="/admin" className="text-sm text-cream/50 hover:text-cream md:text-right">Seller login</Link>
        </div>
      </footer>
    </div>
  );
}
