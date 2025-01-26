import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/utils/animations";
import { useRef } from "react";
import { useTheme } from "@/contexts/theme-context";

interface AboutProps {
  textColor: string;
  aboutOpacity: any;
}

export function About({ textColor, aboutOpacity }: AboutProps) {
  const aboutRef = useRef(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.section
      ref={aboutRef}
      style={{ opacity: aboutOpacity }}
      id="about"
      className="py-20 transition-colors duration-300"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="container mx-auto px-6"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-16 transition-colors duration-300"
            style={{ color: textColor }}
          >
            About DevVoid
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-12 items-center mb-16"
          >
            <div className="text-center md:text-left order-2 md:order-1">
              <h3
                className="text-2xl font-bold mb-4 transition-colors duration-300"
                style={{ color: textColor }}
              >
                Meet the Founder
              </h3>
              <p
                className="mb-6 text-lg font-medium transition-colors duration-300 leading-relaxed"
                style={{ color: textColor }}
              >
                Hi, I'm Aneesh Bhat, a passionate software engineer and
                entrepreneur. With a deep love for technology and innovation, I
                founded DevVoid to help businesses transform their digital
                presence.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Full-Stack Development",
                  "Cloud Architecture",
                  "AI/ML",
                  "DevOps",
                ].map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full transition-all duration-300 font-medium"
                    style={{
                      backgroundColor: `${textColor}15`,
                      color: textColor,
                      border: `1px solid ${textColor}30`,
                    }}
                    whileHover={{
                      backgroundColor: `${textColor}25`,
                      scale: 1.05,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            <motion.div
              className="relative group order-1 md:order-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="aspect-square rounded-2xl overflow-hidden relative"
                style={{
                  backgroundColor: isDark ? `${textColor}15` : `${textColor}20`,
                }}
              >
                <img
                  src="./founder.png"
                  alt="Aneesh Bhat - Founder of DevVoid"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 scale-105 relative z-10"
                  style={{
                    objectPosition: "center 20%",
                  }}
                />
                <motion.div
                  className="absolute inset-0 z-20 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(45deg, ${textColor}15, transparent)`,
                  }}
                  whileHover={{ opacity: 0.8 }}
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg mb-16 text-center font-medium transition-colors duration-300 max-w-2xl mx-auto leading-relaxed"
            style={{ color: textColor }}
          >
            We are a team of passionate developers and designers dedicated to
            creating exceptional digital experiences. With expertise in modern
            technologies and a commitment to quality, we help businesses thrive
            in the digital age.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            {[
              { number: "20+", label: "Projects Completed" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "2+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3
                  className="text-3xl font-bold mb-2 transition-colors duration-300"
                  style={{ color: textColor }}
                >
                  {stat.number}
                </h3>
                <p
                  className="font-medium transition-colors duration-300"
                  style={{ color: textColor }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
