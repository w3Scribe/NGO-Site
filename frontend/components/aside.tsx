import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';

export default function Aside() {
  const navItems = [
    { title: 'Dashboard', path: '/dashboard', icon: '📊' },
    { title: 'Analytics', path: '/dashboard/analytics', icon: '📈' },
    { title: 'Projects', path: '/dashboard/projects', icon: '📁' },
    { title: 'Tasks', path: '/dashboard/tasks', icon: '✓' },
    { title: 'Calendar', path: '/dashboard/calendar', icon: '📅' },
    { title: 'Settings', path: '/dashboard/settings', icon: '⚙️' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <aside className="h-full py-6 px-4 flex flex-col justify-between">
      <div>
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold text-gray-800">CharitySmile</h2>
        </motion.div>
        
        <motion.nav
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ul className="space-y-2">
            {navItems.map((item) => (
              <motion.li 
                key={item.path}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link
                  to={item.path}
                  className="flex items-center gap-3 px-4 py-2.5 text-gray-700 rounded-lg hover:bg-slate-200 hover:text-gray-900 transition-colors"
                  activeProps={{ className: 'bg-slate-200 text-gray-900 font-medium' }}
                >
                  <motion.span 
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    {item.icon}
                  </motion.span>
                  <span>{item.title}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </div>
      
      <motion.div 
        className="mt-auto pt-6 border-t border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <motion.div 
          className="flex items-center gap-3 px-4 py-2"
          whileHover={{ backgroundColor: "rgba(0,0,0,0.05)", borderRadius: "8px" }}
        >
          <motion.div 
            className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            👤
          </motion.div>
          <div>
            <p className="font-medium text-gray-800">User Name</p>
            <p className="text-sm text-gray-500">user@example.com</p>
          </div>
        </motion.div>
      </motion.div>
    </aside>
  );
}