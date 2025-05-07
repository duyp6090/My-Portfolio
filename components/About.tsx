"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen overflow-hidden py-12 text-gray-900">
      <section
        id="about"
        className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 lg:px-0 gap-12 mt-16"
      >
        {/* Text */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
            ✨ About Me – Backend Developer
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 mb-4">
            I’m currently a third-year student at the University of Information Technology (UIT), 
            with a growing interest in backend development and distributed systems. 
            Right now, I’m learning technologies like <span className="font-semibold">Express.js</span> and <span className="font-semibold">Spring Boot</span>.
          </p>
          <p className="text-lg lg:text-xl text-gray-700 mb-4">
            I always try to learn something new every day and stay committed to finishing what I start.
          </p>
          <p className="text-lg lg:text-xl text-gray-700 mb-4">
            I’ve worked on several academic projects and built a personal portfolio to showcase them. 
            These experiences have helped me gradually improve my technical skills and my ability to collaborate and solve problems.
          </p>
          <p className="text-lg lg:text-xl text-gray-700 mb-4">
            In the future, I aim to deepen my expertise in backend engineering and eventually work as a 
            <span className="font-semibold"> Data Engineer</span>, where I can combine structured system design with data-driven thinking.
          </p>
          <p className="text-lg lg:text-xl text-gray-700 mb-6">
            Outside of coding, I enjoy gaming, playing sports, and sometimes reading to discover new ideas and perspectives.
          </p>
          <a
            href="/projects"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full transition-shadow shadow-md hover:shadow-lg"
          >
            See My Work →
          </a>
        </motion.div>

        {/* Avatar */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-xl ring-4 ring-blue-200">
            <Image
              src="/images/profile-pic.png"
              alt="Profile photo"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
