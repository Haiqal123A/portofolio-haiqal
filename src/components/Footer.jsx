import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-800/80">
          
          {/* Kolom Profil Utama */}
          <div className="lg:col-span-2 space-y-4">
            {/* Nama dengan Gradasi Warna */}
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Haiqal Rachmat S.
            </h2>

            <p className="text-slate-400 leading-relaxed text-sm max-w-md">
              Full Stack Developer yang berfokus menciptakan aplikasi web modern, 
              performa tinggi, serta tampilan interaktif dengan pengalaman pengguna yang luar biasa.
            </p>
          </div>

          {/* Kolom Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-blue-400 transition-colors flex items-center gap-1 group"
                  >
                    <span className="opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all text-blue-400">
                      ›
                    </span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom Socials */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">
              Socials
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/Haiqal123A"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 text-slate-300 hover:text-white transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-lg bg-white text-slate-900 flex items-center justify-center text-lg group-hover:scale-105 transition-transform">
                  <FaGithub />
                </div>
                <span className="text-sm font-medium">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/haiqalrachmatsyarief/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 text-slate-300 hover:text-white transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-lg bg-white text-blue-600 flex items-center justify-center text-lg group-hover:scale-105 transition-transform">
                  <FaLinkedin />
                </div>
                <span className="text-sm font-medium">LinkedIn</span>
              </a>

              <a
                href="https://instagram.com/haiqalrachmatsyarief_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 text-slate-300 hover:text-white transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-lg bg-white text-pink-500 flex items-center justify-center text-lg group-hover:scale-105 transition-transform">
                  <FaInstagram />
                </div>
                <span className="text-sm font-medium">Instagram</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Haiqal Rachmat Syarief. Crafted with passion.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            <span>Built with React & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;