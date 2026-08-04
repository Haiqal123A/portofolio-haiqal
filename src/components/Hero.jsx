import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#F8FAFF] pt-50"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-white to-violet-100"></div>

      <div className="absolute -top-56 -left-56 w-[700px] h-[700px] rounded-full bg-cyan-300/40 blur-[140px]"></div>

      <div className="absolute top-10 right-[-180px] w-[800px] h-[800px] rounded-full bg-violet-300/40 blur-[170px]"></div>

      <div className="absolute bottom-[-180px] left-1/2 -translate-x-1/2 w-[900px] h-[350px] rounded-full bg-sky-200/40 blur-[150px]"></div>

      <div className="absolute inset-y-0 right-0 w-[45%] bg-gradient-to-l from-blue-100/40 to-transparent"></div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 items-center gap-20">

          {/* ================= LEFT ================= */}

          <div>

           

            <h1 className="mt-8 text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-[-0.05em] text-slate-900">
              Haiqal
              <br />
              <span className="text-blue-600">
                Rachmat
              </span>
              <br />
              Syarief
            </h1>

            <h2 className="mt-6 text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
               Software Engineer
            </h2>

            <p className="mt-8 text-slate-600 text-lg leading-9 max-w-xl">
              Halo! Saya adalah seorang Web Developer yang memiliki passion dalam menciptakan aplikasi web yang modern dan efisien. Dengan keahlian yang bisa dilihat di skills saya, saya mengembangkan website yang responsif, aman, dan mudah digunakan. Saya senang mempelajari teknologi baru serta membangun solusi digital yang memberikan pengalaman terbaik bagi pengguna.
             
            </p>

            {/* Button */}

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="#contact"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-[0_20px_40px_rgba(37,99,235,.25)] hover:scale-105 duration-300"
              >
                Hire Me
              </a>

              <a
                href="/CV.pdf"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-base shadow-[0_20px_40px_rgba(37,99,235,.25)] hover:scale-105 duration-300"
              >
                <HiDownload className="text-xl" />
                Download CV
              </a>

            </div>

            {/* Social */}

           <div className="flex gap-5 mt-12">

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

          {/* ================= RIGHT ================= */}

          <div className="relative flex justify-center">

            {/* Glow */}

            <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-[130px]"></div>

            {/* Photo */}

            <div className="relative bg-white p-5 rounded-[38px] shadow-[0_35px_80px_rgba(37,99,235,.20)] rotate-2 hover:rotate-0 duration-500">

              <img
                src="/profile.png"
                alt="Haiqal"
                className="w-[420px] h-[520px] object-cover rounded-[28px]"
              />

            </div>

            {/* Experience */}

            <div className="absolute left-0 top-20 bg-white px-6 py-4 rounded-2xl shadow-xl animate-[float_5s_ease-in-out_infinite]">

              <p className="text-slate-500 text-sm">
                Experience
              </p>

              <h3 className="font-bold text-2xl">
                2+ Years
              </h3>

            </div>

            {/* Projects */}

            <div className="absolute right-0 bottom-20 bg-white px-6 py-4 rounded-2xl shadow-xl animate-[float_4s_ease-in-out_infinite]">

              <p className="text-slate-500 text-sm">
                Projects
              </p>

              <h3 className="font-bold text-2xl">
                6+
              </h3>

            </div>

          </div>

        </div>

      </div>

      {/* Wave */}

      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="M0,256L80,245C160,235,320,213,480,202C640,192,800,192,960,208C1120,224,1280,256,1360,272L1440,288L1440,320L0,320Z"
        />
      </svg>

    </section>
  );
}

export default Hero;