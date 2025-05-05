import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from 'components/ui/button';
import { Checkbox } from 'components/ui/checkbox';
import { Input } from 'components/ui/input';
import { motion } from 'framer-motion';
import { Lock, Mail, Shield, User } from 'lucide-react';
import React, { useState } from 'react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'components/ui/form';

// Define the validation schema using Zod
const userFormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
  remember: z.boolean().default(false).optional(),
});

const adminFormSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
  remember: z.boolean().default(false).optional(),
});

export const Route = createFileRoute('/(auth)/signin/')({
  component: RouteComponent,
});

function RouteComponent() {
  // State to track if user is logging in as admin
  const [isAdminLogin, setIsAdminLogin] = useState(false);

  // Add animation styles to document
  React.useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      @keyframes form-appear {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      
      .animate-form-appear {
        animation: form-appear 0.8s ease-out forwards;
      }
      
      .form-delay-1 {
        animation-delay: 0.2s;
        opacity: 0;
      }
      
      .form-delay-2 {
        animation-delay: 0.4s;
        opacity: 0;
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .hover-glow:hover {
        box-shadow: 0 0 15px rgba(79, 70, 229, 0.4);
      }
    `;
    document.head.appendChild(styleEl);

    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  // 1. Define your form.
  const form = useForm<z.infer<typeof userFormSchema> | z.infer<typeof adminFormSchema>>({
    resolver: zodResolver(isAdminLogin ? adminFormSchema : userFormSchema),
    defaultValues: isAdminLogin 
      ? {
          email: '',
          password: '',
          remember: false,
        }
      : {
          username: '',
          email: '',
          password: '',
          remember: false,
        },
    mode: 'onChange',
  });

  // Reset form when switching login modes
  React.useEffect(() => {
    form.reset(
      isAdminLogin 
        ? {
            email: '',
            password: '',
            remember: false,
          }
        : {
            username: '',
            email: '',
            password: '',
            remember: false,
          }
    );
  }, [isAdminLogin, form]);

  function onSubmit(values: z.infer<typeof userFormSchema> | z.infer<typeof adminFormSchema>) {
    console.log(values, { isAdminLogin });
    // Here you would typically make an API call to authenticate the user
    // and redirect based on successful authentication
  }

  return (
    <motion.div
      className="flex min-h-screen items-center justify-center bg-slate-50 relative overflow-hidden pt-16 md:pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Aura Effects */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      ></motion.div>
      <motion.div
        className="absolute top-1/3 -right-20 w-80 h-80 bg-purple-400 rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 2,
        }}
      ></motion.div>
      <motion.div
        className="absolute -bottom-20 left-1/4 w-72 h-72 bg-primary rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 1,
        }}
      ></motion.div>

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px',
        }}
      ></div>

      <motion.div
        className={`w-full max-w-sm p-6 space-y-4 bg-white shadow-lg rounded-lg border ${
          isAdminLogin ? 'border-purple-200' : 'border-gray-100'
        } backdrop-blur-md relative z-10 ${
          isAdminLogin ? 'bg-gradient-to-br from-white to-purple-50' : 'bg-white'
        }`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
          duration: 0.7,
        }}
        whileHover={{
          boxShadow:
            '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          y: -5,
          transition: { duration: 0.3 },
        }}
      >
        <motion.h2
          className={`text-xl font-bold text-center bg-gradient-to-r ${
            isAdminLogin 
              ? 'from-purple-600 to-indigo-600' 
              : 'from-primary to-purple-600'
          } bg-clip-text text-transparent`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {isAdminLogin ? 'Admin Sign In' : 'Sign In'}
        </motion.h2>
        
        {/* Admin login toggle */}
        <motion.div
          className="flex justify-center items-center mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <button
            type="button"
            onClick={() => setIsAdminLogin(false)}
            className={`px-3 py-1.5 text-xs rounded-l-md transition-colors ${
              !isAdminLogin
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Regular User
          </button>
          <button
            type="button"
            onClick={() => setIsAdminLogin(true)}
            className={`px-3 py-1.5 text-xs rounded-r-md flex items-center transition-colors ${
              isAdminLogin
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Shield className="h-3 w-3 mr-1" /> Admin
          </button>
        </motion.div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            {!isAdminLogin && (
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input placeholder="Enter your username" {...field} />
                        <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-3.5 w-3.5" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center text-gray-700">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      {isAdminLogin ? (
                        <Shield className="w-3.5 h-3.5 mr-2 text-purple-600" />
                      ) : (
                        <Mail className="w-3.5 h-3.5 mr-2" />
                      )}
                    </motion.div>
                    {isAdminLogin ? 'Admin Email' : 'Email'}
                  </FormLabel>
                  <FormControl>
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55, duration: 0.5 }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <Input
                        type="email"
                        placeholder={isAdminLogin ? "Enter admin email" : "Enter your email"}
                        {...field}
                        className={`hover:border-primary/50 focus-visible:ring-primary/30 ${
                          isAdminLogin ? 'border-purple-200 focus:border-purple-400' : ''
                        }`}
                      />
                      <motion.div
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        whileHover={{ rotate: 10 }}
                      >
                        {isAdminLogin ? (
                          <Shield className="h-3.5 w-3.5 text-purple-400" />
                        ) : (
                          <Mail className="h-3.5 w-3.5" />
                        )}
                      </motion.div>
                    </motion.div>
                  </FormControl>
                  <FormMessage />
                  {isAdminLogin && (
                    <motion.p 
                      className="text-[10px] text-purple-600 mt-1 flex items-center"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <Shield className="h-2.5 w-2.5 mr-1" /> 
                      Admin access requires authorized email
                    </motion.p>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center text-gray-700">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      <Lock className="w-3.5 h-3.5 mr-2" />
                    </motion.div>
                    Password
                  </FormLabel>
                  <FormControl>
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.65, duration: 0.5 }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                        className="hover:border-primary/50 focus-visible:ring-primary/30"
                      />
                      <motion.div
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        whileHover={{ rotate: 10 }}
                      >
                        <Lock className="h-3.5 w-3.5" />
                      </motion.div>
                    </motion.div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="remember"
              render={({ field }) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <FormItem className="flex flex-row items-start space-x-2 space-y-0 rounded-md border p-3 shadow hover:border-primary/20 transition-colors duration-200">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-xs">Remember me</FormLabel>
                    </div>
                  </FormItem>
                </motion.div>
              )}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                className={`w-full transition-all duration-300 ${
                  isAdminLogin 
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700' 
                    : 'bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700'
                }`}
              >
                {isAdminLogin ? (
                  <span className="flex items-center">
                    <Shield className="mr-2 h-4 w-4" /> 
                    Admin Sign In
                  </span>
                ) : (
                  'Sign In'
                )}
              </Button>
            </motion.div>
          </form>
        </Form>
        <motion.p
          className="text-center text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Don&apos;t have an account?{' '}
          <motion.span whileHover={{ scale: 1.05 }} className="inline-block">
            <Link
              to={'/signup'}
              className="text-primary hover:text-purple-700 hover:underline transition-colors"
            >
              Sign Up
            </Link>
          </motion.span>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
