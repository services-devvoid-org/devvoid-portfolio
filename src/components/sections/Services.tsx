import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/utils/animations";

interface ServicesProps {
  textColor: string;
}

export function Services({ textColor }: ServicesProps) {
  const products = [
    {
      name: "AutomotiveAI",
      description:
        "An innovative automotive platform that revolutionizes the industry. Learn more at automotiveai.ca",
      link: "https://automotiveai.ca/",
    },
    {
      name: "Acadlin",
      description:
        "A comprehensive education management portal for students and faculty to manage marks, subjects, attendance, and academic activities.",
      link: "#",
    },
    {
      name: "Clarity Claims",
      description:
        "A platform connecting insurance agents, service providers, and customers for seamless insurance claim processing and restoration services.",
      link: "#",
    },
  ];

  const services = [
    {
      title: "Web Development",
      skills: ["Next.js", "React.js", "Node.js", "Firebase", "Supabase"],
    },
    {
      title: "Mobile Development",
      skills: ["React Native", "Cross-platform Apps", "Native Integration"],
    },
    {
      title: "DevOps & Testing",
      skills: ["Automated Testing", "CI/CD", "Cloud Architecture"],
    },
    {
      title: "Enterprise Solutions",
      skills: ["Big Data", "Apache", "Kafka", "System Architecture"],
    },
  ];

  return (
    <motion.section
      id="services"
      className="py-20 transition-colors duration-200 rounded-lg max-w-7xl mx-auto mb-10"
      style={{ backgroundColor: `${textColor}05` }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="container mx-auto px-6"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-center mb-16 transition-colors duration-200"
          style={{ color: textColor }}
        >
          Our Products & Services
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold mb-8 transition-colors duration-200"
            style={{ color: textColor }}
          >
            Featured Products
          </motion.h3>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {products.map((product) => (
              <motion.div
                key={product.name}
                variants={itemVariants}
                className="p-6 rounded-2xl transition-all duration-200"
                style={{ backgroundColor: `${textColor}08` }}
                whileHover={{
                  backgroundColor: `${textColor}12`,
                  scale: 1.02,
                }}
              >
                <h4
                  className="text-xl font-bold mb-3 transition-colors duration-200"
                  style={{ color: textColor }}
                >
                  {product.name}
                </h4>
                <p
                  className="text-base mb-4 transition-colors duration-200"
                  style={{ color: `${textColor}CC` }}
                >
                  {product.description}
                </p>
                {product.link !== "#" && (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:underline transition-colors duration-200"
                    style={{ color: textColor }}
                  >
                    Learn More →
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold mb-8 transition-colors duration-200"
            style={{ color: textColor }}
          >
            Our Services
          </motion.h3>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="p-6 rounded-2xl transition-all duration-200"
                style={{ backgroundColor: `${textColor}08` }}
                whileHover={{
                  backgroundColor: `${textColor}12`,
                  scale: 1.02,
                }}
              >
                <h4
                  className="text-xl font-bold mb-4 transition-colors duration-200"
                  style={{ color: textColor }}
                >
                  {service.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full transition-all duration-200"
                      style={{
                        backgroundColor: `${textColor}15`,
                        color: textColor,
                        border: `1px solid ${textColor}30`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Methodology Section */}
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold mb-8 mt-16 transition-colors duration-200"
            style={{ color: textColor }}
          >
            Our Methodology
          </motion.h3>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              {
                phase: "1",
                title: "Discussion & Design",
                description:
                  "Understanding your needs and crafting the perfect solution architecture",
              },
              {
                phase: "2",
                title: "Development",
                description:
                  "Building your solution with best practices and modern technologies",
              },
              {
                phase: "3",
                title: "Testing & Feedback",
                description:
                  "Rigorous testing and incorporating user feedback for improvements",
              },
              {
                phase: "4",
                title: "Product Handoff",
                description:
                  "Smooth deployment and continued support for future growth",
              },
            ].map((step) => (
              <motion.div
                key={step.phase}
                variants={itemVariants}
                className="p-6 rounded-2xl transition-all duration-200 relative"
                style={{ backgroundColor: `${textColor}08` }}
                whileHover={{
                  backgroundColor: `${textColor}12`,
                  scale: 1.02,
                }}
              >
                <div
                  className="text-4xl font-bold mb-4 transition-colors duration-200 opacity-10"
                  style={{ color: textColor }}
                >
                  {step.phase}
                </div>
                <h4
                  className="text-xl font-bold mb-3 transition-colors duration-200"
                  style={{ color: textColor }}
                >
                  {step.title}
                </h4>
                <p
                  className="text-base transition-colors duration-200"
                  style={{ color: `${textColor}CC` }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
