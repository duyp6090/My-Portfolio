"use client";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-20">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Get In Touch
        </h1>
        <p className="text-center text-gray-600 text-lg mb-12">
          I’m always open to connect, collaborate, or just say hi 👋
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Phone */}
          <div className="rounded-xl p-6 bg-white border shadow-md hover:shadow-lg transition duration-300 text-center">
            <Phone size={28} className="text-blue-600 mb-2 mx-auto" />
            <p className="text-lg font-semibold text-gray-800">Phone</p>
            <p className="mt-1 text-gray-700">0363 270 979</p>
          </div>

          {/* Email */}
          <div className="rounded-xl p-6 bg-white border shadow-md hover:shadow-lg transition duration-300 text-center">
            <Mail size={28} className="text-blue-600 mb-2 mx-auto" />
            <p className="text-lg font-semibold text-gray-800">Email</p>
            <a
              href="mailto:duyp6090@gmail.com"
              className="mt-1 text-blue-600 hover:underline break-all"
            >
              duyp6090@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="rounded-xl p-6 bg-white border shadow-md hover:shadow-lg transition duration-300 text-center">
            <Linkedin size={28} className="text-blue-600 mb-2 mx-auto" />
            <p className="text-lg font-semibold text-gray-800">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/duy-ph%E1%BA%A1m-099a49355/"
              target="_blank"
              className="mt-1 text-blue-600 hover:underline break-all"
            >
              linkedin.com/in/duy-phạm
            </a>
          </div>

          {/* GitHub */}
          <div className="rounded-xl p-6 bg-white border shadow-md hover:shadow-lg transition duration-300 text-center">
            <Github size={28} className="text-blue-600 mb-2 mx-auto" />
            <p className="text-lg font-semibold text-gray-800">GitHub</p>
            <a
              href="https://github.com/duyp6090"
              target="_blank"
              className="mt-1 text-blue-600 hover:underline break-all"
            >
              github.com/duyp6090
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
