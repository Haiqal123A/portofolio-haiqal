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

  const menus = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <header className="fixed top-5 left-0 w-full flex justify-center z-50 px-5">

      <nav
        className={`
          w-full
          max-w-7xl
          rounded-[26px]
          transition-all
          duration-500
          backdrop-blur-2xl
          border
          ${
            scroll
              ? "bg-white/90 border-slate-200 shadow-[0_15px_45px_rgba(15,23,42,.12)]"
              : "bg-white/75 border-white/70 shadow-[0_10px_35px_rgba(15,23,42,.08)]"
          }
        `}
      >

        <div className="flex items-center justify-between h-[78px] px-8">

          {/* Logo */}

          <a
            href="#home"
            className="text-[28px] font-extrabold tracking-tight text-slate-900"
          >
           Portofolio
          </a>

          {/* Desktop Menu */}

          <ul className="hidden lg:flex items-center gap-2">

            {menus.map((item) => (

              <li key={item}>

                <a
                  href={`#${item.toLowerCase()}`}
                  className="
                    relative
                    px-5
                    py-2.5
                    rounded-full
                    font-semibold
                    text-slate-700
                    transition-all
                    duration-300
                    hover:bg-blue-600
                    hover:text-white
                    hover:shadow-lg
                  "
                >
                  {item}
                </a>

              </li>

            ))}

          </ul>

          {/* Button */}

          <a
            href="#contact"
            className="
              hidden
              lg:flex
              items-center
              justify-center
              px-7
              py-3
              rounded-full
              bg-gradient-to-r
              from-blue-600
              via-indigo-600
              to-purple-600
              text-white
              font-semibold
              shadow-[0_15px_30px_rgba(37,99,235,.30)]
              hover:scale-105
              hover:shadow-[0_20px_45px_rgba(37,99,235,.45)]
              duration-300
            "
          >
            Hire Me
          </a>

          {/* Mobile Button */}

          <button
            className="lg:hidden text-3xl text-slate-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>

        </div>

        {/* Mobile Menu */}

        <div
          className={`
            lg:hidden
            overflow-hidden
            transition-all
            duration-300
            ${open ? "max-h-[350px] pb-6" : "max-h-0"}
          `}
        >

          <div className="flex flex-col gap-3 px-6 pt-2">

            {menus.map((item) => (

              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="
                  py-3
                  rounded-xl
                  text-center
                  font-semibold
                  text-slate-700
                  hover:bg-blue-600
                  hover:text-white
                  transition-all
                "
              >
                {item}
              </a>

            ))}

            <a
              href="#contact"
              className="
                mt-2
                py-3
                rounded-xl
                text-center
                bg-gradient-to-r
                from-blue-600
                to-purple-600
                text-white
                font-semibold
              "
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