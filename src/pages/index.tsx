import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import DefaultLayout from "@/layouts/default";
import { useTheme } from "@/contexts/theme-context";
import { useEffect } from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Services } from "@/components/sections/Services";

export default function IndexPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bgColor = isDark ? "#262223" : "#ddc6b6";
  const textColor = isDark ? "#ddc6b6" : "#262223";

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    mass: 0.5,
  });

  // Parallax transformations with smoother ranges
  const heroY = useTransform(smoothProgress, [0, 0.5], [0, -150]);
  const aboutOpacity = useTransform(smoothProgress, [0.15, 0.25], [0.9, 1]);

  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.closest("a")?.getAttribute("href");

      if (href?.startsWith("#")) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <DefaultLayout>
      <div
        className="transition-colors duration-300"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <Hero textColor={textColor} bgColor={bgColor} heroY={heroY} />
        <About textColor={textColor} aboutOpacity={aboutOpacity} />
        <Services textColor={textColor} />
        <Contact textColor={textColor} isDark={isDark} />
      </div>

      {/* Enhanced Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left z-50"
        style={{
          scaleX: smoothProgress,
          backgroundColor: textColor,
          opacity: 0.8,
        }}
      />
    </DefaultLayout>
  );
}
