import { createFileRoute } from '@tanstack/react-router';
import Aside from 'components/aside';
import { motion } from 'framer-motion';

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    }
  };
  
  return (
    <motion.div 
      className="w-full h-screen overflow-hidden grid grid-cols-12 gap-4"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.aside 
        className="col-span-3 bg-slate-100 border-r border-gray-300 overflow-y-auto"
        variants={itemVariants}
      >
        <Aside/>
      </motion.aside>
      <motion.section 
        className="col-span-9 overflow-y-auto p-4"
        variants={itemVariants}
      >
        {/* Dashboard content goes here */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6"
          variants={containerVariants}
        >
          {/* Stats cards */}
          {['Donations', 'Volunteers', 'Events'].map((item, index) => (
            <motion.div 
              key={item}
              className="bg-white p-4 rounded-lg shadow"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-lg font-medium text-gray-700">{item}</h3>
              <p className="text-3xl font-bold text-primary mt-2">{(index + 1) * 125}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Activity Feed */}
        <motion.div 
          className="bg-white p-6 rounded-lg shadow mb-6"
          variants={itemVariants}
        >
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {['New donation received', 'Event scheduled', 'Volunteer joined'].map((activity, index) => (
              <motion.div 
                key={index}
                className="flex items-start border-b border-gray-100 pb-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">{activity}</p>
                  <p className="text-sm text-gray-500">Just now</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  )
}
