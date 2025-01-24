export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
      ease: "easeOut",
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const cardHoverVariants = {
  hover: {
    scale: 1.05,
    y: -10,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export const iconRotateVariants = {
  hover: {
    rotate: 360,
    scale: 1.2,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};
