import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import { HiDownload } from "react-icons/hi";
import { FiSend } from "react-icons/fi";

function Home() {
  return (
    <section id="home" className="relative py-24 lg:py-32 overflow-hidden bg-[#fafcff]">
      {/* Background Radial Gradients & Mesh Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-blue-300/30 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-indigo-300/30 blur-[130px] pointer-events-none"></div>

      {/* CONTAINER SAMA DENGAN HERO (max-w-7xl, px-6 lg:px-10) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          
          <p className="text-slate-500 text-base lg:text-lg leading-relaxed">
            Perkenalan singkat mengenai diri saya sebagai siswa Rekayasa Perangkat Lunak yang berfokus pada pengembangan web modern.
          </p>
        </div>

        {/* MAIN CONTENT (items-start agar foto sejajar atas dengan teks nama) */}
        <div className="grid lg:grid-cols-2 items-start gap-20">
          
          {/* ================= LEFT: FOTO & TOMBOL ================= */}
          <div className="flex flex-col items-start">
            {/* PHOTO CARD CONTAINER */}
            <div className="relative max-w-[420px] w-full">
              {/* Glow */}
              <div className="absolute left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-[130px]"></div>

              {/* Card Foto */}
              <div className="relative bg-white p-5 rounded-[38px] shadow-[0_35px_80px_rgba(37,99,235,.20)] -rotate-1 hover:rotate-0 duration-500">
                <img
                  src="/profile.png"
                  alt="Haiqal Rachmat Syarief"
                  className="w-[420px] h-[520px] object-cover rounded-[28px]"
                />
              </div>

              <div className="absolute -left-4 top-16 bg-white px-6 py-4 rounded-2xl shadow-xl">
                <p className="text-slate-500 text-sm">Experience</p>
                <h3 className="font-bold text-2xl text-slate-900">2+ Years</h3>
              </div>

              <div className="absolute -right-4 bottom-16 bg-white px-6 py-4 rounded-2xl shadow-xl">
                <p className="text-slate-500 text-sm">Projects</p>
                <h3 className="font-bold text-2xl text-slate-900">6+</h3>
              </div>
            </div>

            {/* BUTTONS DI BAWAH FOTO */}
            <div className="flex flex-wrap justify-start gap-5 mt-10 w-full">
              <a
                href="/CV.pdf"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-base shadow-[0_20px_40px_rgba(37,99,235,.25)] hover:scale-105 duration-300"
              >
                <HiDownload className="text-xl" />
                Download CV
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-slate-200 bg-white/80 hover:bg-white text-slate-700 font-semibold text-base hover:border-slate-300 duration-300 shadow-sm"
              >
                <FiSend className="text-lg text-slate-500" />
                Contact Me
              </a>
            </div>

            <div className="flex gap-5 mt-8 justify-start">
              <a
                href="https://github.com/Haiqal123A"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-xl hover:-translate-y-2 hover:text-black hover:shadow-2xl duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/haiqalrachmatsyarief/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-xl hover:-translate-y-2 hover:text-blue-600 hover:shadow-2xl duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com/haiqalrachmatsyarief_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-xl hover:-translate-y-2 hover:text-pink-500 hover:shadow-2xl duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* ================= RIGHT: DESKRIPSI & INFO ================= */}
          <div>
            
            {/* Title & Subtitle */}
            <div>
              <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Haiqal Rachmat Syarief
              </h3>
              <p className="mt-2 text-sm lg:text-base font-semibold text-blue-600 tracking-wide">
                Student • SMK Taruna Bhakti • Full Stack Developer
              </p>
            </div>

            

            {/* Paragraphs */}
            <div className="mt-6 space-y-4 text-slate-600 text-base lg:text-lg leading-relaxed">
              <p>
                Saya adalah siswa SMK Taruna Bhakti jurusan <strong className="text-slate-800 font-semibold">Rekayasa Perangkat Lunak (RPL)</strong> yang memiliki ketertarikan mendalam pada dunia <strong className="text-slate-800 font-semibold">Web Development</strong>.
              </p>
              <p>
                Saya senang merancang dan membangun website modern yang responsif, cepat, serta memberikan pengalaman pengguna terbaik. Berbagai proyek sekolah telah saya selesaikan menggunakan ekosistem <span className="text-slate-900 font-medium">React, Node.js,</span> dan <span className="text-slate-900 font-medium">MySQL</span>.
              </p>
              <p>
                Prinsip saya adalah terus belajar dan beradaptasi dengan teknologi baru agar siap bersaing di dunia kerja profesional maupun perguruan tinggi.
              </p>
            </div>

            {/* INFO CARDS (GLASSMORPHISM 2x2) */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="group p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/60 shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-xl group-hover:scale-110 transition duration-300">
                  🎓
                </div>
                <h4 className="font-bold text-slate-900 mt-3 text-base">Student</h4>
                <p className="text-slate-500 text-xs lg:text-sm">SMK Taruna Bhakti</p>
              </div>

              <div className="group p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/60 shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-xl group-hover:scale-110 transition duration-300">
                  💻
                </div>
                <h4 className="font-bold text-slate-900 mt-3 text-base">6+ Projects</h4>
                <p className="text-slate-500 text-xs lg:text-sm">School & Personal</p>
              </div>

              <div className="group p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/60 shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-xl group-hover:scale-110 transition duration-300">
                  🚀
                </div>
                <h4 className="font-bold text-slate-900 mt-3 text-base">Full Stack</h4>
                <p className="text-slate-500 text-xs lg:text-sm">Web Developer</p>
              </div>

              <div className="group p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/60 shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-xl group-hover:scale-110 transition duration-300">
                  ✨
                </div>
                <h4 className="font-bold text-slate-900 mt-3 text-base">Continuous</h4>
                <p className="text-slate-500 text-xs lg:text-sm">Learning Mindset</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;