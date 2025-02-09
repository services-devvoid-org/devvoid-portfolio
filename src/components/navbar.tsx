import { motion } from "framer-motion";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { useTheme } from "@/contexts/theme-context";
import { ThemeToggle } from "@/components/theme-toggle";
import { useScrollTo } from "@/hooks/useScrollTo";
import { useState } from "react";

const navItems = [
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const { theme } = useTheme();
  const scrollTo = useScrollTo();
  const isDark = theme === "dark";
  const bgColor = isDark ? "#262223" : "#ddc6b6";
  const textColor = isDark ? "#ddc6b6" : "#262223";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (id: string) => {
    scrollTo(id);
    setIsMenuOpen(false);
  };

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className={`border-b transition-colors duration-200`}
      style={{
        backgroundColor: bgColor,
        borderColor: `${textColor}10`,
      }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <motion.button
            onClick={() => handleNavigation("home")}
            className="flex justify-start items-center gap-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span
              className="font-bold text-2xl transition-colors duration-200"
              style={{ color: textColor }}
            >
              DevVoid
            </span>
          </motion.button>
        </NavbarBrand>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="hidden lg:flex gap-8 justify-start ml-8"
        >
          {navItems.map((item) => (
            <NavbarItem key={item.id}>
              <motion.button
                className="transition-colors duration-200 hover:opacity-100"
                style={{ color: `${textColor}80` }}
                onClick={() => handleNavigation(item.id)}
              >
                {item.label}
              </motion.button>
            </NavbarItem>
          ))}
        </motion.div>
      </NavbarContent>

      <NavbarContent className="sm:flex basis-1 pl-4" justify="end">
        <ThemeToggle />
        <NavbarMenuToggle
          className="sm:hidden"
          style={{ color: textColor }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </NavbarContent>

      {isMenuOpen && (
        <NavbarMenu
          className="mt-2 transition-colors duration-200 w-full fixed left-0 right-0 border-b shadow-lg"
          style={{
            backgroundColor: bgColor,
            borderColor: `${textColor}10`,
            top: "64px", // Height of the navbar
            maxHeight: "calc(100vh - 64px)", // Viewport height minus navbar height
            overflowY: "auto",
          }}
        >
          <div className="container mx-auto px-6 py-4 flex flex-col gap-6">
            {navItems.map((item) => (
              <NavbarMenuItem key={item.id} className="w-full">
                <motion.button
                  className="transition-colors duration-200 text-lg hover:opacity-100 w-full text-left py-2"
                  style={{ color: `${textColor}80` }}
                  onClick={() => handleNavigation(item.id)}
                  whileHover={{ x: 4 }}
                >
                  {item.label}
                </motion.button>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      )}
    </HeroUINavbar>
  );
};
