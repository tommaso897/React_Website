"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Azienda", href: "/azienda" },
    { name: "Servizi", href: "/servizi" },
    { name: "Contributi", href: "/contributi" },
  ];

  const products = [
    { name: "Piedi per Divani", href: "/prodotti/piedi-ed-articoli-per-divani" },
    { name: "Tappi per Tubi", href: "/prodotti/tappi-in-plastica-per-tubi-di-diverse-sezioni" },
  ];

  const isActive = (href: string) => pathname === href;
  const isProductActive = () => pathname.startsWith("/prodotti");

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
      {/* Top Contact Banner */}
      <div className="hidden md:flex bg-[#002554] text-zinc-300 text-xs py-2 px-6 sm:px-12 lg:px-24 justify-between items-center border-b border-white/10">
        <div className="flex gap-6">
          <a href="tel:+39054587841" className="flex items-center gap-1.5 hover:text-white transition-colors">
            📞 +39 0545 87841
          </a>
          <span className="hidden sm:inline text-zinc-500">|</span>
          <a href="mailto:info@poggialiplasticcreations.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
            ✉️ info@poggialiplasticcreations.com
          </a>
        </div>
        <div className="hidden sm:flex gap-4">
          <a
            href="https://www.facebook.com/poggialiplastic/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/>
            </svg>
            Facebook
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 py-4 px-6 sm:px-12 lg:px-24 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-bold tracking-tight text-[#002554] dark:text-[#28a4d7] group-hover:opacity-90 transition-opacity">
            Poggiali <span className="font-light text-[#28a4d7] dark:text-zinc-300">Plastic Creations</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors relative py-1 ${
                isActive(link.href)
                  ? "text-[#002554] dark:text-[#28a4d7]"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-[#002554] dark:hover:text-[#28a4d7]"
              }`}
            >
              {link.name}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#28a4d7] rounded-full" />
              )}
            </Link>
          ))}

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`text-sm font-medium flex items-center gap-1.5 transition-colors py-1 ${
                isProductActive()
                  ? "text-[#002554] dark:text-[#28a4d7]"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-[#002554] dark:hover:text-[#28a4d7]"
              }`}
            >
              Prodotti
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg py-2 z-50">
                <Link
                  href="/prodotti"
                  className="block px-4 py-2 text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider hover:bg-zinc-50 dark:hover:bg-zinc-850"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Catalogo Completo
                </Link>
                <div className="h-px bg-zinc-200/50 dark:border-zinc-800/50 my-1" />
                {products.map((product) => (
                  <Link
                    key={product.href}
                    href={product.href}
                    onClick={() => setIsDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-[#28a4d7] transition-colors"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Contact Button */}
          <Link
            href="/contatti"
            className="bg-[#002554] hover:bg-[#002554]/90 dark:bg-[#28a4d7] dark:hover:bg-[#28a4d7]/90 text-white text-sm font-semibold py-2 px-5 rounded-full transition-all duration-300 shadow-sm"
          >
            Contattaci
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-600 dark:text-zinc-400 hover:text-[#002554] dark:hover:text-[#28a4d7]"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-200/50 dark:border-zinc-800/50 py-4 px-6 absolute top-full left-0 w-full shadow-lg z-50">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-semibold py-1.5 border-b border-zinc-100 dark:border-zinc-900 ${
                  isActive(link.href) ? "text-[#28a4d7]" : "text-zinc-700 dark:text-zinc-300"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Products */}
            <div className="flex flex-col gap-2 py-1.5 border-b border-zinc-100 dark:border-zinc-900">
              <span className="text-sm font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                Prodotti
              </span>
              <Link
                href="/prodotti"
                onClick={() => setIsOpen(false)}
                className={`text-base font-semibold pl-2 ${
                  pathname === "/prodotti" ? "text-[#28a4d7]" : "text-zinc-700 dark:text-zinc-300"
                }`}
              >
                Catalogo Prodotti
              </Link>
              {products.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium pl-4 text-zinc-600 dark:text-zinc-400 ${
                    isActive(product.href) ? "text-[#28a4d7]" : ""
                  }`}
                >
                  {product.name}
                </Link>
              ))}
            </div>

            <Link
              href="/contatti"
              onClick={() => setIsOpen(false)}
              className="bg-[#002554] dark:bg-[#28a4d7] text-white text-center font-semibold py-3 rounded-xl shadow-md mt-2"
            >
              Contattaci
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
