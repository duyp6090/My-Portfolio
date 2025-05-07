"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import profilePic from "../public/images/profile-pic.png";
import dynamicAnimation from "../public/images/animation.gif";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-sky-100 text-gray-800 px-6 relative overflow-hidden"
    >
      {/* Background animation nhẹ nhàng */}
      <div className="absolute inset-0 z-0 opacity-10 brightness-110">
        <Image
          src={dynamicAnimation}
          alt="Background Animation"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="relative w-36 h-36 mb-6 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg">
          <Image
            src={profilePic}
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <TypeAnimation
            sequence={[
              "Hello, I'm Duy",
              1500,
              "Backend Developer",
              1500,
              "Welcome to My Portfolio",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
            cursor={true}
            wrapper="span"
          />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl max-w-xl mb-8 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Third-year IT student at UIT, specializing in Information. Passionate
          about backend development and building scalable systems.
        </motion.p>

        {/* Button */}
        <motion.a
          href="/projects"
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md transition transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
}
