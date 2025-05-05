import { useAuth } from '@/lib/useAuth';
import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { DollarSign, Home, Settings, Shield, Users } from 'lucide-react';

export default function Aside() {
  const { user } = useAuth();
  
  const navItems = [
    { title: 'Dashboard', path: '/dashboard', icon: 'home' },
    { title: 'Volunteers', path: '/dashboard/volunteers', icon: 'users' },
    { title: 'Donations', path: '/dashboard/donations', icon: 'dollar-sign' },
    { title: 'Settings', path: '/dashboard/settings', icon: 'settings' },
  ];
  
  // Add admin link for admin users
  const getNavItems = () => {
    const items = [...navItems];
    if (user?.role === 'admin') {
      items.push({ title: 'Admin Panel', path: '/admin', icon: 'shield' });
    }
    return items;
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <aside className="h-full pt-4 pb-6 px-4 flex flex-col justify-between">
      <div>
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center mr-3">
              <span className="text-white font-bold">AC</span>
            </div>            <h2 className="text-xl font-bold text-gray-800">Asgav Charity</h2>
          </div>
        </motion.div>
        
        <motion.nav
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ul className="space-y-2">
            {getNavItems().map((item) => (
              <motion.li
                key={item.path}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Link
                  to={item.path}
                  className="flex items-center gap-3 px-4 py-2.5 text-gray-700 rounded-lg hover:bg-slate-200 hover:text-gray-900 transition-colors"
                  activeProps={{
                    className: 'bg-slate-200 text-gray-900 font-medium',
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    transition={{ type: 'spring', stiffness: 500 }}
                    className={item.icon === 'shield' ? 'text-purple-600' : 'text-gray-500'}
                  >
                    {item.icon === 'home' && <Home size={20} />}
                    {item.icon === 'dollar-sign' && <DollarSign size={20} />}
                    {item.icon === 'users' && <Users size={20} />}
                    {item.icon === 'settings' && <Settings size={20} />}
                    {item.icon === 'shield' && <Shield size={20} />}
                  </motion.div>
                  <span className={item.icon === 'shield' ? 'text-purple-600' : ''}>{item.title}</span>
                </Link>
              </motion.li>
            ))}          </ul>
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
          whileHover={{
            backgroundColor: 'rgba(0,0,0,0.05)',
            borderRadius: '8px',
          }}
        >
          <motion.div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              user?.role === 'admin' ? 'bg-purple-100' : 'bg-gray-300'
            }`}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {user?.role === 'admin' ? <Shield size={16} className="text-purple-600" /> : '👤'}
          </motion.div>
          <div>
            <p className="font-medium text-gray-800">{user?.name || user?.username || 'Guest'}</p>
            <p className="text-sm text-gray-500">
              {user?.email || 'Not signed in'}
              {user?.role === 'admin' && (
                <span className="ml-1 text-[10px] text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded-full">
                  Admin
                </span>
              )}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </aside>
  );
}
