import { FaArrowRight, FaGithub, FaFigma } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Portofolio",
      image: "/portofolio.png",
      description:
        "Portofolio web ini dirancang dengan gaya modern-minimalis yang menyajikan profil profesional secara ringkas, jelas, dan interaktif",
      link: "https://github.com/Haiqal123A/portofolio-haiqal",
      tech: ["React", "Laravel", "Tailwind"],
      isFigma: false,
    },
    {
      title: "Digital Library",
      image: "/library.png",
      description:
        "Website perpustakaan digital yang memudahkan pengguna mencari dan meminjam buku secara online.",
      link: "https://github.com/Haiqal123A/perpustakaaandigital",
      tech: ["React", "Express", "Node.js"],
      isFigma: false,
    },
    {
      title: "E-Commerce Laptop",
      image: "/ecommerce.png",
      description:
        "Website penjualan laptop modern dengan tampilan responsif dan pengalaman pengguna yang nyaman.",
      link: "https://github.com/Haiqal123A/e-commerce-basic",
      tech: ["React", "Tailwind", "MySQL"],
      isFigma: false,
    },
    {
      title: "Pengaduan Masyarakat",
      image: "/pengaduan.png",
      description:
        "Website pelaporan masyarakat dengan sistem login, dashboard admin dan manajemen laporan.",
      link: "https://github.com/Haiqal123A/PENGADUAN-MASYARAKAT",
      tech: ["Laravel", "Tailwind", "MySQL"],
      isFigma: false,
    },
    {
      title: "ui/ux Coffee Shop",
      image: "/coffee.png",
      description:
        "Mendesain antarmuka website coffee shop menggunakan Figma dengan konsep modern dan elegan.",
      link: "https://www.figma.com/design/d0x5RkgU8nFsuoUZbpfgmK/Untitled?node-id=0-1&p=f&t=8XBJOlOu82WqQ0Ds-0",
      tech: ["Figma", "UI/UX"],
      isFigma: true,
    },
    {
      title: "ui/ux Pengaduan Rakyat",
      image: "/pengaduanui.png",
      description:
        "Merancang UI/UX aplikasi Pengaduan Rakyat menggunakan Figma dengan desain modern, responsif, dan user-friendly",
      link: "https://www.figma.com/design/4QyrE1CBghQTtlxlC4qVun/Untitled?node-id=2-3&t=eSPGZpgPVknPqHgJ-0",
      tech: ["Figma", "UI/UX"],
      isFigma: true,
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 lg:py-32 overflow-hidden bg-slate-50/50"
    >
      {/* ================= BACKGROUND GRADIENT SOFT ================= */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100/50 via-slate-50/30 to-indigo-100/50 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-cyan-200/30 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      {/* CONTAINER UTAMA */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADING SECTION */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Projects
          </h2>

          <p className="text-slate-500 text-base lg:text-lg leading-relaxed">
            Beberapa project pilihan yang telah saya kerjakan selama belajar Web Development, baik untuk tugas sekolah maupun eksplorasi mandiri.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-xl rounded-[32px] overflow-hidden border border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Action Button & Footer */}
              <div className="p-6 lg:p-8 pt-0">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    w-full
                    py-3.5
                    px-5
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-600
                    text-white
                    font-bold
                    text-sm
                    shadow-[0_10px_20px_rgba(37,99,235,0.2)]
                    hover:shadow-[0_15px_25px_rgba(37,99,235,0.35)]
                    hover:scale-[1.02]
                    active:scale-95
                    transition-all
                    duration-300
                  "
                >
                  {project.isFigma ? (
                    <>
                      <FaFigma className="text-base" />
                      Lihat Design
                    </>
                  ) : (
                    <>
                      <FaGithub className="text-base" />
                      Telusuri Code
                    </>
                  )}
                  <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;