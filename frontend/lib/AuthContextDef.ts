import { createContext } from 'react';
import { AuthStatus, User } from './auth';

// Define context type
export type AuthContextType = {
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
  logout: async () => { },
  isAdmin: () => false,
});
