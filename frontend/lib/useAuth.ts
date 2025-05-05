import { useContext } from 'react';
import { AuthContext } from './AuthContextDef';

// Hook to use auth context
export const useAuth = () => useContext(AuthContext);
