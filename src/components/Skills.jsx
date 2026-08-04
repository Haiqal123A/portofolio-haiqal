import {
  FaReact,
  FaCode,
  FaMobileAlt,
  FaFigma,
  FaCheckCircle,
} from "react-icons/fa";

import {
  SiLaravel,
  SiMysql,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "Frontend Development", value: 90 },
    { name: "Backend Development", value: 85 },
    { name: "Database Management", value: 85 },
    { name: "UI/UX Design Concept", value: 80 },
  ];

  const featureCards = [
    {
      icon: <FaReact className="text-blue-600 text-xl" />,
      title: "Frontend Stack",
      desc: "React, Tailwind, HTML, CSS",
      bgIcon: "bg-blue-50/80",
    },
    {
      icon: <SiLaravel className="text-red-500 text-xl" />,
      title: "Backend Stack",
      desc: " Node.js, Express",
      bgIcon: "bg-red-50/80",
    },
    {
      icon: <SiMysql className="text-blue-600 text-xl" />,
      title: "Database & Tools",
      desc: "MySQL, Git",
      bgIcon: "bg-cyan-50/80",
    },
    {
      icon: <FaFigma className="text-purple-500 text-xl" />,
      title: "Design & Workflow",
      desc: "Figma, Agile",
      bgIcon: "bg-purple-50/80",
    },
  ];

  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden bg-[#fafcff]">
      
      {/* ================= BACKGROUND MESH GRADIENT ================= */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100/40 via-white to-violet-100/40 pointer-events-none" />
      <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-cyan-200/30 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      {/* CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-slate-500 text-base lg:text-lg leading-relaxed">
            Teknologi dan ekosistem modern yang biasa saya gunakan dalam membangun aplikasi web yang cepat dan responsif.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 items-start gap-20">
          
          {/* ================= LEFT SIDE: KARTU BESAR & MODERN HIGHLIGHT CARDS ================= */}
          <div className="flex flex-col items-center w-full space-y-6">
            
            {/* CARD PROFICIENCY */}
            <div className="relative w-full bg-white/70 backdrop-blur-xl p-8 rounded-[38px] border border-white shadow-[0_35px_80px_rgba(37,99,235,0.08)] hover:shadow-2xl transition-all duration-500">
              <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <div className="w-2 h-6 bg-blue-600 rounded-full"></div>
                Skill Proficiency
              </h3>

              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center text-sm font-bold">
                      <span className="text-slate-700 uppercase tracking-wider text-[11px]">{skill.name}</span>
                      <span className="text-blue-600">{skill.value}%</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden border border-slate-200/30">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MODERN HIGHLIGHT CARDS (CLEAN CODE & RESPONSIVE) */}
            <div className="grid grid-cols-2 gap-4 w-full">
              
              {/* Clean Code Card */}
              <div className="group relative overflow-hidden p-5 rounded-[26px] bg-gradient-to-br from-white/90 via-blue-50/30 to-indigo-50/50 backdrop-blur-xl border border-white/80 shadow-[0_10px_25px_rgba(37,99,235,0.05)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-600/10 border border-blue-200/50 flex items-center justify-center text-blue-600 text-lg group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <FaCode />
                  </div>
                  <FaCheckCircle className="text-blue-500/40 text-xs" />
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm tracking-tight">Clean Code</h4>
                <p className="text-slate-500 text-[11px] font-medium mt-0.5">Structured & Maintainable</p>
              </div>

              {/* Responsive Card */}
              <div className="group relative overflow-hidden p-5 rounded-[26px] bg-gradient-to-br from-white/90 via-indigo-50/30 to-purple-50/50 backdrop-blur-xl border border-white/80 shadow-[0_10px_25px_rgba(79,70,229,0.05)] hover:shadow-[0_15px_30px_rgba(79,70,229,0.12)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-600/10 border border-indigo-200/50 flex items-center justify-center text-indigo-600 text-lg group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <FaMobileAlt />
                  </div>
                  <FaCheckCircle className="text-indigo-500/40 text-xs" />
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm tracking-tight">Responsive</h4>
                <p className="text-slate-500 text-[11px] font-medium mt-0.5">All Screens Optimized</p>
              </div>

            </div>

          </div>

          {/* ================= RIGHT SIDE: TEXT & SMALL CARDS ================= */}
          <div className="space-y-8">
            
            {/* Title Area */}
            <div className="space-y-3">
              <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Modern Technologies <br />& Workflow
              </h3>
            </div>

            {/* Paragraph */}
            <p className="text-slate-600 text-sm lg:text-base leading-relaxed max-w-xl">
              Dalam mengembangkan solusi software, saya memilih perpaduan teknologi yang teruji performanya untuk membangun <strong className="text-slate-800">Frontend</strong> maupun <strong className="text-slate-800">Backend</strong> yang stabil dan skalabel.
            </p>

            {/* GRID SMALL CARDS */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {featureCards.map((card, idx) => (
                <div
                  key={idx}
                  className="group p-5 rounded-[22px] bg-white/70 backdrop-blur-md border border-slate-200/50 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300"
                >
                  <div className={`w-11 h-11 rounded-xl ${card.bgIcon} flex items-center justify-center text-xl group-hover:scale-110 transition duration-300 shadow-sm`}>
                    {card.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 mt-4 text-sm">{card.title}</h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed mt-1">{card.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;