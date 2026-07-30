import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden bg-[#F8FAFF]"
    >
      {/* Background */}

      <div className="absolute -left-44 top-0 w-[550px] h-[550px] rounded-full bg-blue-200/30 blur-[150px]"></div>

      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full bg-violet-200/30 blur-[160px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-black mt-3 text-slate-900">
            Contact Me
          </h2>

          <p className="mt-5 text-slate-500 max-w-2xl mx-auto leading-8">
            Jika Anda ingin bekerja sama atau sekadar berdiskusi,
            silakan hubungi saya melalui informasi di bawah ini.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT */}

          <div className="space-y-6">

            <div className="bg-white rounded-3xl shadow-xl p-7 flex gap-5 hover:-translate-y-2 duration-300">

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 text-2xl">

                <FaEnvelope />

              </div>

              <div>

                <h3 className="font-bold text-xl">
                  Email
                </h3>

                <p className="text-slate-500 mt-2">
                  haiqalrachmatsyarief@email.com
                </p>

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-7 flex gap-5 hover:-translate-y-2 duration-300">

              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 text-2xl">

                <FaPhoneAlt />

              </div>

              <div>

                <h3 className="font-bold text-xl">
                  WhatsApp
                </h3>

                <p className="text-slate-500 mt-2">
                  +62 857-1640-4046
                </p>

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-7 flex gap-5 hover:-translate-y-2 duration-300">

              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 text-2xl">

                <FaMapMarkerAlt />

              </div>

              <div>

                <h3 className="font-bold text-xl">
                  Location
                </h3>

                <p className="text-slate-500 mt-2">
                  Depok, Indonesia
                </p>

              </div>

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
    href="https://linkedin.com/in/USERNAME_LINKEDIN"
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

          {/* RIGHT */}

          <div className="bg-white rounded-[35px] shadow-2xl p-10">

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full rounded-xl border border-slate-200 p-4 outline-none focus:border-blue-600"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-slate-200 p-4 outline-none focus:border-blue-600"
              />

              <input
                type="text"
                placeholder="Subjek"
                className="w-full rounded-xl border border-slate-200 p-4 outline-none focus:border-blue-600"
              />

              <textarea
                rows="6"
                placeholder="Pesan..."
                className="w-full rounded-xl border border-slate-200 p-4 outline-none focus:border-blue-600 resize-none"
              ></textarea>

              <button
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 duration-300"
              >
                Kirim Pesan
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;