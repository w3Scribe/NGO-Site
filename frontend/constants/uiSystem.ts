// Unified UI elements system for the application

// ------ BUTTON CONFIGURATION ------
export interface ButtonStyle {
  className: string;
  hoverEffect?: string;
  activeEffect?: string;
  focusEffect?: string;
  disabledStyles?: string;
}

export interface ButtonConfig {
  [key: string]: ButtonStyle;
}

export const buttonConfig: ButtonConfig = {
  primary: {
    className: "bg-primary hover:bg-primary/90 text-white transition-all duration-200 group",
    activeEffect: "active:bg-primary/80",
    focusEffect: "focus:ring-2 focus:ring-primary/50 focus:outline-none",
    disabledStyles: "disabled:bg-primary/50 disabled:cursor-not-allowed"
  },
  secondary: {
    className: "bg-gray-200 hover:bg-gray-300 text-gray-800 transition-all duration-200",
    activeEffect: "active:bg-gray-400",
    focusEffect: "focus:ring-2 focus:ring-gray-300 focus:outline-none",
    disabledStyles: "disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
  },
  ghost: {
    className: "text-primary hover:text-primary/90 hover:bg-primary/5 transition-all duration-200",
    activeEffect: "active:bg-primary/10",
    focusEffect: "focus:ring-2 focus:ring-primary/30 focus:outline-none",
    disabledStyles: "disabled:text-primary/40 disabled:hover:bg-transparent disabled:cursor-not-allowed"
  },
  outline: {
    className: "border border-primary text-primary bg-transparent hover:bg-primary/10 transition-all duration-200",
    activeEffect: "active:bg-primary/20",
    focusEffect: "focus:ring-2 focus:ring-primary/30 focus:outline-none",
    disabledStyles: "disabled:border-primary/40 disabled:text-primary/40 disabled:hover:bg-transparent disabled:cursor-not-allowed"
  },
  danger: {
    className: "bg-red-500 hover:bg-red-600 text-white transition-all duration-200",
    activeEffect: "active:bg-red-700",
    focusEffect: "focus:ring-2 focus:ring-red-300 focus:outline-none",
    disabledStyles: "disabled:bg-red-300 disabled:cursor-not-allowed"
  },
  success: {
    className: "bg-green-500 hover:bg-green-600 text-white transition-all duration-200",
    activeEffect: "active:bg-green-700",
    focusEffect: "focus:ring-2 focus:ring-green-300 focus:outline-none",
    disabledStyles: "disabled:bg-green-300 disabled:cursor-not-allowed"
  }
};

// Helper to get full button styling including all effects
export const getButtonStyles = (variant: keyof typeof buttonConfig): string => {
  const style = buttonConfig[variant];
  return [
    style.className,
    style.activeEffect,
    style.focusEffect,
    style.disabledStyles
  ].filter(Boolean).join(' ');
};

// ------ COMMON COMPONENT STYLES ------
export const componentStyles = {
  // Card styles
  card: {
    base: "bg-white rounded-lg shadow-sm overflow-hidden",
    hover: "hover:shadow-md transition-shadow duration-200",
    bordered: "border border-gray-200",
    padded: "p-4"
  },

  // Section styles
  section: {
    container: "container mx-auto px-4 py-8 md:py-12",
    title: "text-3xl font-bold text-gray-800 mb-4",
    subtitle: "text-xl text-gray-600 mb-8",
    titleUnderline: "w-20 h-1 bg-primary mx-auto mb-6"
  },

  // Form element styles
  form: {
    container: "space-y-4",
    group: "space-y-2",
    label: "block text-sm font-medium text-gray-700",
    input: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20 focus:ring-opacity-50",
    error: "text-sm text-red-500 mt-1",
    helpText: "text-sm text-gray-500 mt-1"
  },

  // Avatar styles
  avatar: {
    small: "h-8 w-8 rounded-full",
    medium: "h-12 w-12 rounded-full",
    large: "h-16 w-16 rounded-full",
    border: "border-2 border-white"
  },

  // Text styles
  text: {
    heading1: "text-4xl font-bold tracking-tight",
    heading2: "text-3xl font-bold",
    heading3: "text-2xl font-bold",
    heading4: "text-xl font-semibold",
    body: "text-base text-gray-600",
    small: "text-sm text-gray-500",
    link: "text-primary hover:text-primary/80 hover:underline"
  }
};

// ------ PAGE SPECIFIC STYLES ------
export const pageStyles = {
  // Navbar styles
  navbar: {
    header: (isScrolled: boolean) => [
      'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 text-white bg-white shadow-sm border-b border-zinc-200 transition-all duration-300',
      isScrolled && 'py-2',
    ],
    navLink: 'text-zinc-800 text-sm font-medium px-2 py-1 relative overflow-hidden group',
    signInButton: 'bg-primary/5 text-primary hover:text-primary/90 hover:bg-primary/10 transition-all duration-200',
    mobileMenu: 'fixed inset-0 bg-white z-40 pt-20 pb-6 px-6 flex flex-col md:hidden',
    mobileNavItem: 'py-3 border-b border-gray-100',
    mobileNavLink: (isActive: boolean) => [
      'text-zinc-800 text-lg flex items-center',
      isActive && 'text-primary font-medium',
    ],
    mobileSignInButton: 'w-full bg-primary hover:bg-primary/90 text-white',
  },

  // Sidebar styles
  sidebar: {
    container: "fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-md border-r border-gray-200",
    nav: "px-4 py-2",
    navItem: "flex items-center gap-3 px-4 py-2.5 text-gray-700 rounded-lg hover:bg-slate-200 hover:text-gray-900 transition-colors",
    navItemActive: "bg-slate-200 text-gray-900 font-medium",
    navIcon: "text-gray-500",
    navIconActive: "text-primary",
  },

  // Form page styles
  formPage: {
    container: "min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",
    formCard: "max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md",
    title: "mt-6 text-center text-3xl font-extrabold text-gray-900",
    subtitle: "mt-2 text-center text-sm text-gray-600",
  }
};
