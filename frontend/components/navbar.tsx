import { Link, useRouterState } from '@tanstack/react-router';
import { Button } from 'components/ui/button';
import { motion } from 'framer-motion';
import { cn } from 'lib/utils';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  buttonVariants,
  logoVariants,
  mobileMenuVariants,
  navbarVariants,
  navItemVariants,
  navLinks,
} from '../constants';

export default function Navbar() {
  const currentUrlPath = useRouterState().location.pathname;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 text-white bg-white shadow-sm border-b border-zinc-200 transition-all duration-300',
        isScrolled && 'py-2'
      )}
      initial="hidden"
      animate={isScrolled ? ['visible', 'scrolled'] : 'visible'}
      variants={navbarVariants}
    >
      <motion.div variants={logoVariants} whileHover="hover">
        <Link
          to={'/'}
          className="text-zinc-800 font-semibold text-2xl relative"
        >
          <span className="relative z-10">CharitySmile</span>
          <motion.span
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: currentUrlPath === '/' ? '100%' : '30%' }}
            transition={{ duration: 0.3 }}
          />
        </Link>
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((item, index) => (
          <motion.div
            key={item.path}
            custom={index + 1}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.1 }}
          >
            <Link
              to={item.path}
              className={cn(
                'text-zinc-800 text-sm font-medium px-2 py-1 relative overflow-hidden group'
              )}
            >
              <motion.span className="relative z-10">{item.label}</motion.span>

              {/* Active indicator */}
              {currentUrlPath === item.path && (
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/70 to-purple-500/70"
                  layoutId="navIndicator"
                  transition={{ type: 'spring', bounce: 0.2 }}
                />
              )}

              {/* Hover indicator */}
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary/40 to-purple-500/40 group-hover:w-full transition-all duration-300"
                style={{ originX: 0 }}
              />
            </Link>
          </motion.div>
        ))}

        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="ml-2"
        >
          <Button
            variant="ghost"
            className="bg-primary/5 text-primary hover:text-primary/90 hover:bg-primary/10 transition-all duration-200"
            asChild
          >
            <Link to="/signin" className="flex items-center">
              <span>Sign In</span>
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14"
                  />
                </svg>
              </motion.div>
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        className="block md:hidden text-zinc-800"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        whileTap={{ scale: 0.9 }}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-white z-40 pt-20 pb-6 px-6 flex flex-col md:hidden"
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((item, index) => (
              <motion.div
                key={item.path}
                custom={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="py-3 border-b border-gray-100"
              >
                <Link
                  to={item.path}
                  className={cn(
                    'text-zinc-800 text-lg flex items-center',
                    currentUrlPath === item.path && 'text-primary font-medium'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                  {currentUrlPath === item.path && (
                    <motion.div
                      className="ml-2 w-1 h-6 bg-primary rounded-full"
                      layoutId="mobileIndicator"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-white"
              asChild
            >
              <Link to="/signin" onClick={() => setIsMobileMenuOpen(false)}>
                Sign In
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </motion.header>
  );
}
