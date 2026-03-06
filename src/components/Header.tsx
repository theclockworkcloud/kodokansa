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

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-kodo-black/95 backdrop-blur-md transition-all duration-500 ${
          scrolled ? "shadow-lg shadow-black/20" : ""
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <span className="font-serif text-2xl text-kodo-red transition-colors group-hover:text-kodo-red-light">
              柔
            </span>
            <div className="hidden sm:block">
              <div className="text-sm font-medium tracking-wide text-kodo-white">
                Kodokan Judo
              </div>
              <div className="font-display text-[10px] tracking-[0.2em] text-kodo-gold/70 uppercase">
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
                      className={`relative px-3 py-2 text-[13px] tracking-wide transition-colors ${
                        isActive
                          ? "text-kodo-white"
                          : "text-kodo-gray-400 hover:text-kodo-white"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-3 right-3 h-px bg-kodo-gold" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-[60] inline-flex h-10 w-10 items-center justify-center text-kodo-gray-400 hover:text-kodo-white md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <div className="flex h-5 w-6 flex-col justify-between">
              <span
                className={`block h-px w-full bg-current transition-all duration-300 ${
                  mobileOpen ? "translate-y-[10px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-full bg-current transition-all duration-300 ${
                  mobileOpen ? "scale-x-0 opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-full bg-current transition-all duration-300 ${
                  mobileOpen ? "-translate-y-[10px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        <div className="kodo-line" />
      </header>

      {/* Full-screen mobile overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-kodo-black/98 backdrop-blur-lg transition-all duration-500 md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(165,36,34,0.15)_0%,transparent_60%)]" />
        <div className="absolute inset-0 kodo-wave opacity-10" />

        <nav className="relative flex h-full flex-col items-center justify-center">
          <ul className="space-y-2 text-center">
            {navLinks.map((link, i) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <li
                  key={link.href}
                  className="transition-all duration-500"
                  style={{
                    transitionDelay: mobileOpen ? `${150 + i * 60}ms` : "0ms",
                    opacity: mobileOpen ? 1 : 0,
                    transform: mobileOpen ? "translateY(0)" : "translateY(16px)",
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`inline-block py-2 font-serif text-3xl transition-colors ${
                      isActive
                        ? "text-kodo-white"
                        : "text-kodo-gray-400 hover:text-kodo-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div
            className="mt-12 transition-all duration-500"
            style={{
              transitionDelay: mobileOpen ? "700ms" : "0ms",
              opacity: mobileOpen ? 1 : 0,
            }}
          >
            <div className="kodo-section-line mx-auto" />
            <p className="mt-4 font-display text-xs tracking-[0.2em] text-kodo-gold/50 uppercase">
              Kodokan Judo SA
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}
