// Navbar animation variants
export const navbarVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  },
  scrolled: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
    transition: { duration: 0.3 }
  }
};

export const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * custom,
      duration: 0.4
    }
  })
};

export const logoVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 }
  },
  hover: {
    scale: 1.05,
    textShadow: "0 0 8px rgba(79, 70, 229, 0.3)",
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 300
    }
  }
};

export const buttonVariants = {
  hidden: { opacity: 0, x: 10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.4
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 2px 10px rgba(79, 70, 229, 0.3)",
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 400
    }
  }
};

export const mobileMenuVariants = {
  hidden: { opacity: 0, x: "100%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};
