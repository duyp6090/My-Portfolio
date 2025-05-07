"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "Yummy Website",
    description: "Ordering food online with AI ChatBot and VNPAY integration.",
    image: "/projects/Yummy.png",
    demoLink: "https://youtu.be/2pP5y-h9BRE?feature=shared",
    githubLink: "https://github.com/hoangduccoderdeptrai/APP_ORDER_FOOD",
  },
  {
    id: 2,
    title: "Medicine E-commerce",
    description: "Online pharmacy with real-time chat and secure product APIs.",
    image: "/projects/medicine.png",
    demoLink: "https://medicine.id.vn/",
    githubLink: "https://github.com/Hiroshi-CS/e-commerce-medicine",
  },
  {
    id: 3,
    title: "Graduation Forecast",
    description: "Predict UIT students’ graduation outcomes with real-world data.",
    image: "/projects/uitforcast.png",
    demoLink: "https://youtu.be/co9wg8C47Jw?si=obb8EcSwb4eglZE",
    githubLink: "https://github.com/duyp6090/Manage-Student-Academic-Insight-Graduation-Forecast",
  },
  {
    id: 4,
    title: "Automation Testing",
    description: "Web application testing automation with WebDriverIO.",
    image: "/projects/automation.png",
    demoLink: "https://youtu.be/4-6psWjg4nc",
    githubLink: "https://github.com/duyp6090/Automation-Testing",
  },
  {
    id: 5,
    title: "Manage Private Clinic",
    description: "Help manage patients, drugs and automated create medical records.",
    image: "/projects/automation.png",
    demoLink: "https://youtu.be/4-6psWjg4nc",
    githubLink: "https://github.com/duyp6090/private_clinic_management_se104",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-white text-gray-900">
      <h2 className="text-5xl font-extrabold text-center mb-16">My Projects</h2>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group relative bg-white rounded-2xl overflow-hidden transform transition-transform duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 * (index % 2) }}
            viewport={{ once: true }}
          >
            {/* Image with hover overlay */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
              <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-gray-900">
                {project.title}
              </h3>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                {project.description}
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href={project.demoLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-lg text-sm font-medium transition"
                >
                  <ArrowRight size={16} />
                  Demo
                </Link>
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg text-sm font-medium transition"
                >
                  <Github size={16} />
                  Code
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
