import React, { createContext, useEffect, useState } from 'react';
import { AuthStatus, User, authService } from './auth';

// Define context type
type AuthContextType = {
  user: User | null;
  status: AuthStatus;
  login: (email: string, password: string) => Promise<User | null>;
  logout: () => Promise<void>;
  isAdmin: () => boolean;
};

// Create context with default values
export const AuthContext = createContext<AuthContextType>({
  user: null,
  status: 'loading',
  login: async () => null,
  logout: async () => {},
  isAdmin: () => false,
});

// Export hook for easy context consumption
export const useAuth = () => useContext(AuthContext);

// Auth Provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<AuthStatus>('loading');

  // Check for existing auth on mount
  useEffect(() => {
    const initialUser = authService.getCurrentUser();
    setUser(initialUser);
    setStatus(initialUser ? 'authenticated' : 'unauthenticated');
  }, []);
  // Login function
  const login = async (email: string, password: string): Promise<User | null> => {
    setStatus('loading');
    try {
      const user = await authService.login(email, password);
      setUser(user);
      setStatus(user ? 'authenticated' : 'unauthenticated');
      return user;
    } catch (error) {
      // Log error in production or handle it appropriately
      console.error("Login failed:", error);
      setStatus('unauthenticated');
      return null;
    }
  };

  // Logout function
  const logout = async (): Promise<void> => {
    setStatus('loading');
    await authService.logout();
    setUser(null);
    setStatus('unauthenticated');
  };

  // Check if user is admin
  const isAdmin = (): boolean => {
    return authService.isAdmin();
  };

  return (
    <AuthContext.Provider value={{ user, status, login, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
