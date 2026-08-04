import Swal from "sweetalert2";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // 🔴 POP-UP PERINGATAN (Form Belum Lengkap)
    if (
      !form.name ||
      !form.email ||
      !form.subject ||
      !form.message
    ) {
      Swal.fire({
        icon: "warning",
        title: "<span style='color: #0f172a; font-weight: 800; font-size: 24px;'>Form Belum Lengkap</span>",
        html: `
          <p style="color: #64748b; font-size: 15px; margin-top: 8px; line-height: 1.5;">
            Harap isi semua kolom terlebih dahulu sebelum mengirim pesan.
          </p>
        `,
        confirmButtonText: "Mengerti",
        confirmButtonColor: "#f59e0b",
        background: "#ffffff",
        padding: "2rem",
        customClass: {
          popup: "rounded-[28px] shadow-2xl border border-slate-100",
          confirmButton: "px-6 py-3 rounded-xl text-sm font-semibold shadow-md transition-transform active:scale-95",
        },
      });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "depok12345",
        "template_6kkoiwo",
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "1oo9u-frgs12VCClc"
      )
      .then(() => {
        // 🟢 POP-UP BERHASIL
        Swal.fire({
          icon: "success",
          title: "<span style='color: #0f172a; font-weight: 800; font-size: 24px;'>Pesan Terkirim!</span>",
          html: `
            <div style="margin-top: 10px;">
              <p style="color: #334155; font-size: 15px; font-weight: 500;">
                Terima kasih telah menghubungi saya.
              </p>
              <p style="color: #94a3b8; font-size: 13px; margin-top: 6px;">
                Saya akan membalas pesan Anda secepat mungkin.
              </p>
            </div>
          `,
          confirmButtonText: "Tutup",
          confirmButtonColor: "#2563eb",
          background: "#ffffff",
          padding: "2.5rem 2rem",
          customClass: {
            popup: "rounded-[28px] shadow-2xl border border-slate-100",
            confirmButton: "px-7 py-3 rounded-xl text-sm font-semibold shadow-lg shadow-blue-500/30 transition-transform active:scale-95",
          },
          showClass: {
            popup: "animate__animated animate__fadeInDown animate__faster",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp animate__faster",
          },
        });

        // Reset Form
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);

        // ❌ POP-UP GAGAL
        Swal.fire({
          icon: "error",
          title: "<span style='color: #0f172a; font-weight: 800; font-size: 24px;'>Gagal Mengirim</span>",
          html: `
            <p style="color: #64748b; font-size: 14px; margin-top: 8px;">
              Terjadi kesalahan saat mengirim pesan. Coba lagi beberapa saat lagi.
            </p>
            <span style="display:inline-block; margin-top:12px; font-size: 12px; background: #fee2e2; color: #ef4444; padding: 4px 12px; border-radius: 8px; font-family: monospace;">
              ${error?.text || "Network Error"}
            </span>
          `,
          confirmButtonText: "Coba Lagi",
          confirmButtonColor: "#ef4444",
          background: "#ffffff",
          padding: "2rem",
          customClass: {
            popup: "rounded-[28px] shadow-2xl border border-slate-100",
            confirmButton: "px-6 py-3 rounded-xl text-sm font-semibold shadow-md transition-transform active:scale-95",
          },
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden bg-[#F8FAFF]"
    >
      {/* Background Glow */}
      <div className="absolute -left-44 top-0 w-[550px] h-[550px] rounded-full bg-blue-200/30 blur-[150px]"></div>
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full bg-violet-200/30 blur-[160px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-slate-900">
            Contact Me
          </h2>
          <p className="mt-5 text-slate-500 max-w-2xl mx-auto leading-8">
            Jika Anda ingin bekerja sama atau sekadar berdiskusi,
            silakan hubungi saya melalui informasi di bawah ini.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT INFO */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-xl p-7 flex gap-5 hover:-translate-y-2 duration-300 border border-slate-100/80">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 text-2xl shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="font-bold text-xl text-slate-800">Email</h3>
                <p className="text-slate-500 mt-2 break-all">
                  haiqalrachmatsyarief@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-7 flex gap-5 hover:-translate-y-2 duration-300 border border-slate-100/80">
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 text-2xl shrink-0">
                <FaPhoneAlt />
              </div>
              <div>
                <h3 className="font-bold text-xl text-slate-800">WhatsApp</h3>
                <p className="text-slate-500 mt-2">
                  +62 857-1640-4046
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-7 flex gap-5 hover:-translate-y-2 duration-300 border border-slate-100/80">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 text-2xl shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="font-bold text-xl text-slate-800">Location</h3>
                <p className="text-slate-500 mt-2">
                  Depok, Indonesia
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mt-12">
              <a
                href="https://github.com/Haiqal123A"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-xl hover:-translate-y-2 hover:text-black hover:shadow-2xl duration-300 border border-slate-100"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/haiqalrachmatsyarief/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-xl hover:-translate-y-2 hover:text-blue-600 hover:shadow-2xl duration-300 border border-slate-100"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com/haiqalrachmatsyarief_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-xl hover:-translate-y-2 hover:text-pink-500 hover:shadow-2xl duration-300 border border-slate-100"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-[35px] shadow-2xl p-8 lg:p-10 border border-slate-100">
            <form onSubmit={sendEmail} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nama Lengkap"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 p-4 outline-none focus:border-blue-600 focus:bg-white transition-all duration-200"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 p-4 outline-none focus:border-blue-600 focus:bg-white transition-all duration-200"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subjek"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 p-4 outline-none focus:border-blue-600 focus:bg-white transition-all duration-200"
                />
              </div>

              <div>
                <textarea
                  rows="5"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tuliskan pesan Anda di sini..."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 p-4 outline-none focus:border-blue-600 focus:bg-white transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:scale-[1.02] active:scale-95 duration-300 disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Mengirim...</span>
                  </>
                ) : (
                  <span>Kirim Pesan</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;