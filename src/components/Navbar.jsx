import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menus = [ "Home", "Skills", "Projects", "Contact"];

  return (
    <header className="fixed top-5 left-0 w-full flex justify-center z-50 px-5">
      <nav
        className={`w-full max-w-7xl rounded-[26px] transition-all duration-500 backdrop-blur-2xl border ${
          scroll
            ? "bg-white/90 border-slate-200 shadow-[0_15px_45px_rgba(15,23,42,.12)]"
            : "bg-white/75 border-white/70 shadow-[0_10px_35px_rgba(15,23,42,.08)]"
        }`}
      >
        <div className="flex items-center justify-between h-[78px] px-8">
          {/* Logo */}
          <a
            href="#home"
            className="text-[28px] font-extrabold tracking-tight text-slate-900"
          >
            Portofolio
          </a>

          {/* Desktop */}
          <ul className="hidden lg:flex items-center gap-2">
            {menus.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="px-5 py-2.5 rounded-full font-semibold text-slate-700 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center justify-center px-7 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 duration-300"
          >
            Hire Me
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-3xl text-slate-700"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden
            transition-all
            duration-500
            overflow-hidden
            ${open ? "max-h-[600px]" : "max-h-0"}
          `}
        >
          <div className="px-6 pt-2 pb-8 flex flex-col gap-4">
            {menus.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="py-3 rounded-xl text-center font-semibold text-slate-700 hover:bg-blue-600 hover:text-white transition"
              >
                {item}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 w-full py-4 rounded-xl text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;