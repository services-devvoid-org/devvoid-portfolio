import { motion } from "framer-motion";
import { button as buttonStyles } from "@heroui/theme";
import { containerVariants, itemVariants } from "@/utils/animations";
import { useScrollTo } from "@/hooks/useScrollTo";

interface HeroProps {
  textColor: string;
  bgColor: string;
  heroY: any;
}

export function Hero({ textColor, bgColor, heroY }: HeroProps) {
  const scrollTo = useScrollTo();

  return (
    <motion.section
      id="home"
      style={{ y: heroY }}
      className="flex flex-col items-center justify-center min-h-screen gap-4 pb-14 md:pb-20 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="inline-block max-w-lg text-center justify-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.img
              src={`/devvoid-${textColor === "#ddc6b6" ? "dark" : "light"}.png`}
              alt="DevVoid Logo"
              className="w-32 h-32 transition-all duration-700 rounded-full"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <motion.div
            className="transition-all duration-500"
            style={{ color: textColor }}
          >
            <span className="inline-block hover:scale-110 transition-transform duration-300">
              Dev
            </span>
            <span className="inline-block hover:scale-110 transition-transform duration-300">
              Void
            </span>
          </motion.div>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold transition-colors duration-500"
          style={{ color: textColor }}
        >
          Transforming Ideas into Digital Reality
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-4 text-lg font-medium transition-colors duration-500"
          style={{ color: textColor }}
        >
          Delivering innovative software solutions, custom services, and
          cutting-edge products that drive business success.
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex gap-3 mt-8"
      >
        <motion.button
          className={buttonStyles({
            radius: "full",
            variant: "shadow",
          })}
          onClick={() => scrollTo("services")}
          style={{
            backgroundColor: textColor,
            color: bgColor,
          }}
        >
          <span className="px-6 py-1 font-medium">Our Services</span>
        </motion.button>
        <motion.button
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          onClick={() => scrollTo("contact")}
          style={{
            borderColor: textColor,
            color: textColor,
            borderWidth: "2px",
          }}
        >
          <span className="px-6 py-1 font-medium">Contact Us</span>
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
