import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div>

            <h2 className="text-3xl font-black">
              Haiqal Rachmat Syarief
            </h2>

            <p className="text-slate-400 mt-4 leading-8 max-w-lg">
              Full Stack Developer yang berfokus
              membuat website modern,
              responsif, dan mudah digunakan.
            </p>

          </div>

          <div className="flex justify-start lg:justify-end gap-5">

            {[FaGithub, FaLinkedin, FaInstagram].map((Icon, index) => (

              <a
                key={index}
                href="#"
                className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-xl hover:bg-blue-600 duration-300"
              >

                <Icon />

              </a>

            ))}

          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">

          © {new Date().getFullYear()} Haiqal Rachmat Syarief.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;