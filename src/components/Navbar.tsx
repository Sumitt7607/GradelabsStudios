import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Work" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change
  useEffect(() => setOpen(false), [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── Top bar ── */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "bg-black/95 backdrop-blur-xl hairline-bottom"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between py-5">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center"
              onClick={() => setOpen(false)}
            >
              <img
                src="/logo.png"
                alt="GradeLab Studios"
                className="h-12 md:h-16 w-auto object-contain mix-blend-screen contrast-[1.1] brightness-[1.05]"
              />
            </Link>

            {/* Desktop links */}
            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `text-sm transition-colors link-underline ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://wa.me/919911990332?text=Hello%20GradeLab%20Studios.%20I%20am%20interested%20in%20discussing%20a%20new%20project%20with%20your%20team%20and%20would%20love%20to%20book%20a%20pitch%20call.%20Please%20let%20me%20know%20your%20availability"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a Pitch
              </a>
            </div>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden relative z-[60] p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setOpen((s) => !s)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    style={{ display: "block" }}
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    style={{ display: "block" }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Full-screen mobile overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden bg-black"
          >
            {/* Push content below the navbar bar */}
            <div className="h-[72px]" />

            <div className="container flex flex-col h-[calc(100vh-72px)] overflow-y-auto py-6">
              {/* Nav links — staggered slide-in */}
              <nav className="flex flex-col flex-1">
                {links.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.05 + i * 0.06,
                      duration: 0.3,
                      ease: [0.65, 0, 0.35, 1],
                    }}
                  >
                    <NavLink
                      to={l.to}
                      end={l.to === "/"}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center py-5 text-4xl font-semibold tracking-tight border-b border-white/10 transition-colors ${
                          isActive
                            ? "text-foreground"
                            : "text-white/50 hover:text-foreground"
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* CTA pinned at bottom */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.3 }}
                className="pb-8 pt-10"
              >
                <a
                  href="https://wa.me/919911990332?text=Hello%20GradeLab%20Studios.%20I%20am%20interested%20in%20discussing%20a%20new%20project%20with%20your%20team%20and%20would%20love%20to%20book%20a%20pitch%20call.%20Please%20let%20me%20know%20your%20availability"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center text-base py-4"
                >
                  Book a Pitch
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
