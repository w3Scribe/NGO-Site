import { createRootRoute, Outlet } from '@tanstack/react-router';
import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';
import Navbar from '../components/navbar';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
      </motion.div>
      <AnimatePresence mode="wait">
        <Outlet />
      </AnimatePresence>
    </React.Fragment>
  );
}
