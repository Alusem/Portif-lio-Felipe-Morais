"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteData } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-cream/10 bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
        <Link
          href="/"
          className="font-display text-xl tracking-wide text-cream md:text-2xl"
          onClick={() => setMenuOpen(false)}
        >
          {siteData.name}
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {siteData.navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm uppercase tracking-[0.15em] text-cream/70 transition-colors hover:text-cream"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contato"
          className="hidden rounded-full border border-cream/30 px-5 py-2.5 text-sm text-cream transition-all hover:border-cream/60 hover:bg-cream/5 md:inline-flex"
        >
          Fale comigo
        </Link>

        <button
          type="button"
          className="relative z-50 flex h-11 w-11 items-center justify-center md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <span className="sr-only">{menuOpen ? "Fechar" : "Menu"}</span>
          <div className="flex w-6 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-cream transition-transform duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-cream transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-cream transition-transform duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {siteData.navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-display text-3xl text-cream"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#contato"
          className="mt-4 rounded-full border border-cream/30 px-8 py-3 text-cream"
          onClick={() => setMenuOpen(false)}
        >
          Fale comigo
        </Link>
      </div>
    </header>
  );
}
