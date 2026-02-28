import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", page: "Home" },
  { label: "Home Owners", page: "HomeOwners" },
  { label: "Pubs & Clubs", page: "PubsAndClubs" },
  { label: "Contact", page: "Contact" },
];

export default function Layout({ children, currentPageName }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <style>{`
        :root {
          --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
        }
        body {
          font-family: var(--font-sans);
          -webkit-font-smoothing: antialiased;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to={createPageUrl("Home")} className="flex items-center gap-2">
              <span className="text-xl font-bold text-white tracking-tight">
                Louvr<span className="text-amber-400">Shield</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPageName === link.page
                      ? "text-amber-400 bg-amber-400/10"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to={createPageUrl("Contact")}>
                <Button size="sm" className="ml-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-lg">
                  Find a Retailer
                </Button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
            >
              <div className="px-6 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      currentPageName === link.page
                        ? "text-amber-400 bg-amber-400/10"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to={createPageUrl("Contact")}
                  onClick={() => setMobileOpen(false)}
                  className="block mt-4"
                >
                  <Button className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-lg">
                    Find a Retailer
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Page Content */}
      <main className="pt-16 md:pt-20">
        {children}
      </main>
    </div>
  );
}