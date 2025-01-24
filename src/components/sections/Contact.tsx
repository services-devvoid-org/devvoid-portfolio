import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/utils/animations";

interface ContactProps {
  textColor: string;
  isDark: boolean;
}

export function Contact({ textColor, isDark }: ContactProps) {
  const contactInfo = [
    {
      title: "Email",
      value: "aneeshbhat3719@gmail.com",
      href: "mailto:aneeshbhat3719@gmail.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Phone",
      value: "+91 7022405943",
      href: "tel:+917022405943",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
  ];

  return (
    <motion.section
      id="contact"
      className="py-20 transition-all duration-200 relative overflow-hidden w-full"
      style={{
        backgroundColor: isDark ? `${textColor}08` : `${textColor}10`,
      }}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(${textColor} 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20%" }}
        className="container mx-auto px-6 relative"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-center mb-12 transition-colors duration-200"
          style={{ color: textColor }}
        >
          Get in Touch
        </motion.h2>
        <div className="max-w-xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 gap-8 text-center"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="group bg-opacity-50"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col items-center gap-2">
                  <motion.div
                    className="p-4 rounded-full transition-all duration-200"
                    style={{
                      backgroundColor: isDark
                        ? `${textColor}10`
                        : `${textColor}15`,
                      boxShadow: `0 0 30px ${textColor}05`,
                    }}
                    whileHover={{
                      backgroundColor: isDark
                        ? `${textColor}15`
                        : `${textColor}20`,
                      scale: 1.1,
                    }}
                  >
                    <div style={{ color: textColor }}>{info.icon}</div>
                  </motion.div>
                  <h3
                    className="text-xl font-bold transition-colors duration-200"
                    style={{ color: textColor }}
                  >
                    {info.title}
                  </h3>
                  <a
                    href={info.href}
                    className="font-medium transition-all duration-200 hover:scale-105"
                    style={{ color: textColor }}
                  >
                    {info.value}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
