import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { useTheme } from "@/contexts/theme-context";

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 },
};

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bgColor = isDark ? "#262223" : "#ddc6b6";
  const textColor = isDark ? "#ddc6b6" : "#262223";

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeIn}
      className="relative flex flex-col min-h-screen transition-colors duration-300"
      style={{ backgroundColor: bgColor }}
    >
      <Navbar />
      <main className="mx-auto flex-grow w-full">{children}</main>
      <footer
        className="w-full flex items-center justify-center py-6 transition-colors duration-300"
        style={{ borderTop: `1px solid ${textColor}10` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          <div
            className="flex items-center gap-2 transition-colors duration-300"
            style={{ color: `${textColor}80` }}
          >
            <span>© 2025 DevVoid. All rights reserved.</span>
          </div>
          {/* <div className="flex items-center gap-4 text-sm">
            {["Privacy Policy", "Terms of Service", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="transition-colors duration-300"
                style={{ color: `${textColor}60` }}
                onMouseEnter={(e) => (e.currentTarget.style.color = textColor)}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = `${textColor}60`)
                }
              >
                {item}
              </Link>
            ))}
          </div> */}
        </motion.div>
      </footer>
    </motion.div>
  );
}
