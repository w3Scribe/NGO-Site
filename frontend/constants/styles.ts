// Common styles used in the application
export const navbarStyles = {
  header: (isScrolled: boolean) => [
    'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 text-white bg-white shadow-sm border-b border-zinc-200 transition-all duration-300',
    isScrolled && 'py-2',
  ],
  navLink:
    'text-zinc-800 text-sm font-medium px-2 py-1 relative overflow-hidden group',
  signInButton:
    'bg-primary/5 text-primary hover:text-primary/90 hover:bg-primary/10 transition-all duration-200',
  mobileMenu:
    'fixed inset-0 bg-white z-40 pt-20 pb-6 px-6 flex flex-col md:hidden',
  mobileNavItem: 'py-3 border-b border-gray-100',
  mobileNavLink: (isActive: boolean) => [
    'text-zinc-800 text-lg flex items-center',
    isActive && 'text-primary font-medium',
  ],
  mobileSignInButton: 'w-full bg-primary hover:bg-primary/90 text-white',
};
