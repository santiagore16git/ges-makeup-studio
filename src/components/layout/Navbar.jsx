import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "https://base44.app/api/apps/6a60faceb2d0839ce964897b/files/mp/public/6a60faceb2d0839ce964897b/52b440a4c_ges-logo-v2.png";

const NAV_LINKS = [
  { label: "Inicio", path: "/" },
  { label: "Trabajo", path: "/trabajo" },
  { label: "Preguntas", path: "/preguntas-frecuentes" },
  { label: "Testimonios", path: "/testimonios" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-[#FDFCFB]/85 backdrop-blur-md border-b transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled ? "border-[#E8E2D9]/70 py-4" : "border-transparent py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src={LOGO_URL}
              alt="GES Makeup Studio"
              className={`w-auto transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                scrolled ? "h-12 md:h-14" : "h-16 md:h-20"
              }`}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-12 lg:gap-16">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-body text-[10px] tracking-[0.28em] uppercase transition-colors duration-500 ${
                    active ? "text-[#2D2926]" : "text-[#8C8279] hover:text-[#2D2926]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#2D2926] p-2 -mr-2"
            aria-label="Abrir menú"
          >
            {mobileOpen ? <X size={20} strokeWidth={1.25} /> : <Menu size={20} strokeWidth={1.25} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-0 z-40 bg-[#FDFCFB] flex flex-col items-center justify-center gap-14"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={link.path}
                  className={`font-display text-3xl tracking-wide transition-colors ${
                    location.pathname === link.path
                      ? "text-[#2D2926]"
                      : "text-[#8C8279] hover:text-[#2D2926]"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}