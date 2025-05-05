import { z } from 'zod';

// Types
export type User = {
  id: string;
  username: string;
  email: string;
  role: 'user' | 'volunteer' | 'donor' | 'admin';
  name?: string;
  avatar?: string;
};

export type AuthStatus = 'authenticated' | 'unauthenticated' | 'loading';

// Mock users for demo purposes (would be replaced with actual API calls in production)
const MOCK_USERS: User[] = [
  {
    id: '1',
    username: 'admin',
    email: 'admin@asgavcharity.org',
    role: 'admin',
    name: 'Admin User',
    avatar: '/admin.jpg',
  },
  {
    id: '2',
    username: 'volunteer1',
    email: 'volunteer1@example.com',
    role: 'volunteer',
    name: 'Rahul Sharma',
    avatar: '/volunteer.jpg',
  },
  {
    id: '3',
    username: 'donor1',
    email: 'donor1@example.com',
    role: 'donor',
    name: 'Neha Patil',
    avatar: '/donor.jpg',
  },
];

// Login credentials schema
export const loginSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
  remember: z.boolean().default(false).optional(),
});

// Auth Service
export const authService = {  // Login function
  login: async (email: string, _password: string): Promise<User | null> => {
    // Simulating network request delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // In a real app, this would be an API call to your backend
    const user = MOCK_USERS.find(user => user.email === email);

    // For demo purposes, any password works for the mock users
    // In production, you would verify the password with your backend
    if (user) {
      // Store auth token in localStorage (or preferably in a secure HTTP-only cookie in production)
      localStorage.setItem('ngo-auth-token', JSON.stringify({
        user,
        expires: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
      }));
      return user;
    }

    return null;
  },

  // Logout function
  logout: async (): Promise<void> => {
    localStorage.removeItem('ngo-auth-token');
    return Promise.resolve();
  },

  // Get current user function
  getCurrentUser: (): User | null => {
    const authData = localStorage.getItem('ngo-auth-token');

    if (authData) {
      try {
        const { user, expires } = JSON.parse(authData);

        // Check if token is expired
        if (expires && expires > Date.now()) {
          return user as User;
        } else {
          // Token expired, clean up
          localStorage.removeItem('ngo-auth-token');
        }
      } catch (_error) {
        // Invalid token format, clean up
        localStorage.removeItem('ngo-auth-token');
      }
    }

    return null;
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return authService.getCurrentUser() !== null;
  },

  // Check if user is admin
  isAdmin: (): boolean => {
    const user = authService.getCurrentUser();
    return user !== null && user.role === 'admin';
  },
  // Register function (for demo, just mocks the registration process)
  register: async (username: string, email: string, _password: string): Promise<User | null> => {
    // Simulating network request delay
    await new Promise(resolve => setTimeout(resolve, 800));

    // In a real app, this would be an API call to your backend
    const newUser: User = {
      id: `user-${Date.now()}`,
      username,
      email,
      role: 'user',
      name: username,
    };

    // For demo purposes, we're just returning the user object
    // In production, you would create the user in your database
    return newUser;
  }
};
