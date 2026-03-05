"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/clubs", label: "Clubs" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-kodo-black/95 backdrop-blur-sm transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-black/20" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded border-2 border-kodo-red bg-kodo-red/10 font-serif text-lg font-bold text-kodo-white transition-colors group-hover:bg-kodo-red/20">
            柔
          </div>
          <div className="hidden sm:block">
            <div className="font-serif text-sm font-semibold tracking-wide text-kodo-white">
              Kodokan Judo
            </div>
            <div className="font-display text-[10px] font-medium tracking-[0.25em] text-kodo-gold uppercase">
              South Australia
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`kodo-link relative rounded px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-kodo-gold"
                        : "text-kodo-gray-300 hover:text-kodo-white"
                    }`}
                  >
                    {link.label}
                    {/* Active gold dot */}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-kodo-gold" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Animated Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative inline-flex h-10 w-10 items-center justify-center rounded text-kodo-gray-300 hover:text-kodo-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <div className="flex h-5 w-6 flex-col justify-between">
            <span
              className={`block h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                mobileOpen ? "translate-y-[9px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                mobileOpen ? "scale-x-0 opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                mobileOpen ? "-translate-y-[9px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Nav — CSS transition instead of conditional render */}
      <nav
        className={`overflow-hidden border-t border-kodo-gray-800 transition-all duration-300 ease-out md:hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <ul className="space-y-1 px-4 pb-4 pt-2">
          {navLinks.map((link, i) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <li
                key={link.href}
                className="transition-all duration-300"
                style={{
                  transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms",
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? "translateX(0)" : "translateX(-8px)",
                }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-kodo-red/10 text-kodo-gold"
                      : "text-kodo-gray-300 hover:bg-kodo-gray-800 hover:text-kodo-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Decorative line */}
      <div className="kodo-line" />
    </header>
  );
}
