// Unified animations system for the entire application
// This file consolidates animations from animations.ts, inlineAnimations.ts, and homeAnimations.ts

// ------ GENERAL ANIMATION INTERFACES ------
export interface AuraAnimation {
  position: string;
  animation: {
    scale: number[];
    opacity: number[];
  };
  transition: {
    duration: number;
    repeat: number;
    repeatType: "reverse" | "loop" | "mirror";
    delay?: number;
  };
}

// ------ NAVIGATION ANIMATIONS ------
export const navAnimations = {
  // Navbar animations
  navbar: {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    scrolled: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
      transition: { duration: 0.3 },
    },
  },

  // Navigation items
  navItem: {
    hidden: { opacity: 0, y: -10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * custom,
        duration: 0.4,
      },
    }),
  },

  // Logo animations
  logo: {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.05,
      textShadow: '0 0 8px rgba(79, 70, 229, 0.3)',
      transition: {
        duration: 0.2,
        type: 'spring',
        stiffness: 300,
      },
    },
  },

  // Mobile menu animations
  mobileMenu: {
    hidden: { opacity: 0, x: '100%' },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  },

  // Mobile menu item animation
  mobileMenuItem: (index: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: index * 0.1 },
  }),

  // Mobile sign-in button animation
  mobileSignIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.4 },
  },

  // Mobile menu button animation
  mobileMenuButton: {
    whileTap: { scale: 0.9 },
  },

  // Logo underline animation
  logoUnderline: {
    initial: { width: 0 },
    animate: (isHome: boolean) => ({
      width: isHome ? '100%' : '30%',
    }),
    transition: { duration: 0.3 },
  },
};

// ------ INTERACTIVE ELEMENT ANIMATIONS ------
export const elementAnimations = {
  // Button animations
  button: {
    hidden: { opacity: 0, x: 10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.4,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 2px 10px rgba(79, 70, 229, 0.3)',
      transition: {
        duration: 0.2,
        type: 'spring',
        stiffness: 400,
      },
    },
  },

  // Arrow icon hover animation
  arrowHover: {
    initial: { x: 0 },
    whileHover: { x: 3 },
    transition: { type: 'spring', stiffness: 400 },
  },
};

// ------ HOME PAGE SPECIFIC ANIMATIONS ------
export const homeAnimations = {
  // Initial stats for the animated counter on homepage
  initialStats: {
    volunteers: 0,
    ngos: 0,
    donations: 0,
    beneficiaries: 0,
  },

  // Target stats for the animated counter on homepage
  targetStats: {
    volunteers: 500,
    ngos: 30,
    donations: 5000000,
    beneficiaries: 10000,
  },

  // Hero section aura/glow animations
  heroAuras: [
    {
      position: "absolute -top-40 left-1/3 w-96 h-96 bg-primary rounded-full opacity-15 blur-3xl",
      animation: {
        scale: [1, 1.2, 1],
        opacity: [0.15, 0.25, 0.15],
      },
      transition: {
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
      }
    },
    {
      position: "absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-purple-500 rounded-full opacity-20 blur-3xl",
      animation: {
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.3, 0.2],
      },
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
        delay: 1.5,
      }
    },
    {
      position: "absolute bottom-0 left-1/4 w-[25rem] h-[25rem] bg-blue-400 rounded-full opacity-15 blur-3xl",
      animation: {
        scale: [1, 1.2, 1],
        opacity: [0.15, 0.25, 0.15],
      },
      transition: {
        duration: 9,
        repeat: Infinity,
        repeatType: "reverse",
        delay: 0.8,
      }
    },
  ] as AuraAnimation[],
};

// ------ CONTAINER ANIMATIONS ------
export const containerAnimations = {
  // Basic container
  basic: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  },

  // Item within staggered container
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
      }
    }
  }
};
