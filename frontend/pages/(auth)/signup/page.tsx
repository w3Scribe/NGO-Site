import { zodResolver } from '@hookform/resolvers/zod';
import { createFileRoute } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Link } from '@tanstack/react-router';
import { Button } from 'components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'components/ui/form';
import { Input } from 'components/ui/input';
import { motion } from 'framer-motion';
import { Lock, Mail, User } from 'lucide-react';

// ✅ Validation schema
const signupSchema = z
  .object({
    username: z.string().min(2, 'Username must be at least 2 characters'),
    email: z.string().email('Enter a valid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const Route = createFileRoute('/(auth)/signup/')({
  component: SignupPage,
});

function SignupPage() {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
  };

  const onSubmit = (values: z.infer<typeof signupSchema>) => {
    console.log('Signup data:', values);
  };
  return (
    <motion.div
      className="flex min-h-screen items-center justify-center bg-slate-50 relative overflow-hidden pt-16 md:pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Aura Effects */}
      <motion.div
        className="absolute -top-40 right-1/4 w-96 h-96 bg-teal-300 rounded-full opacity-20 blur-3xl"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'reverse' as const,
          ease: 'easeInOut',
        }}
      ></motion.div>
      <motion.div
        className="absolute top-1/2 -left-20 w-80 h-80 bg-primary rounded-full opacity-20 blur-3xl"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'reverse' as const,
          ease: 'easeInOut',
          delay: 2.5,
        }}
      ></motion.div>
      <motion.div
        className="absolute -bottom-20 right-1/3 w-72 h-72 bg-purple-400 rounded-full opacity-20 blur-3xl"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'reverse' as const,
          ease: 'easeInOut',
          delay: 1.2,
        }}
      ></motion.div>

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px',
        }}
      ></div>      <motion.div
        className="w-full max-w-sm p-6 space-y-4 bg-white shadow-lg rounded-lg border border-gray-100 backdrop-blur-md relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{
          boxShadow:
            '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        }}
      >        <motion.h2
          className="text-xl font-bold text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Create an Account
        </motion.h2>

        <Form {...form}>          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-3"
          >
            {/* Username */}
            <motion.div variants={itemVariants}>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Choose a username"
                          {...field}
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                        />
                        <motion.div
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <User className="h-4 w-4" />
                        </motion.div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Your email address"
                          {...field}
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                        />
                        <motion.div
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Mail className="h-4 w-4" />
                        </motion.div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>

            {/* Password */}
            <motion.div variants={itemVariants}>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type="password"
                          placeholder="Create a password"
                          {...field}
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                        />
                        <motion.div
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Lock className="h-4 w-4" />
                        </motion.div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>

            {/* Confirm Password */}
            <motion.div variants={itemVariants}>
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type="password"
                          placeholder="Confirm your password"
                          {...field}
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                        />
                        <motion.div
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Lock className="h-4 w-4" />
                        </motion.div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 transition-all duration-300"
                onClick={() => form.handleSubmit(onSubmit)()}
              >
                Create Account
              </Button>
            </motion.div>
          </motion.div>
        </Form>

        <motion.p
          className="text-center text-sm text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Already have an account?{' '}
          <motion.span whileHover={{ scale: 1.05 }} className="inline-block">
            <Link
              to="/signin"
              className="text-primary hover:text-purple-700 hover:underline transition-colors"
            >
              Sign In
            </Link>
          </motion.span>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
