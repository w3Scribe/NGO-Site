// Logo underline animation
export const logoUnderlineAnimation = {
  initial: { width: 0 },
  animate: (isHome: boolean) => ({
    width: isHome ? '100%' : '30%'
  }),
  transition: { duration: 0.3 }
};

// Arrow icon hover animation
export const arrowHoverAnimation = {
  initial: { x: 0 },
  whileHover: { x: 3 },
  transition: { type: "spring", stiffness: 400 }
};

// Mobile menu item animation
export const mobileMenuItemAnimation = (index: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: index * 0.1 }
});

// Mobile sign-in button animation
export const mobileSignInAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: 0.4 }
};

// Mobile menu button animation
export const mobileMenuButtonAnimation = {
  whileTap: { scale: 0.9 }
};
