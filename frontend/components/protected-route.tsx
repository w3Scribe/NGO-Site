import { useAuth } from '@/lib/useAuth';
import { useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

type ProtectedRouteProps = {
  children: React.ReactNode;
  requireAdmin?: boolean;
};

export default function ProtectedRoute({ children, requireAdmin = false }: ProtectedRouteProps) {
  const { user, status } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'unauthenticated') {
      // Redirect to login if not authenticated
      navigate({ to: '/signin' });
    } else if (status === 'authenticated' && requireAdmin && user?.role !== 'admin') {
      // Redirect to dashboard if authenticated but not admin (when admin is required)
      navigate({ to: '/dashboard' });
    }
  }, [status, user, navigate, requireAdmin]);

  // Show nothing while checking authentication
  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // If we require admin access and user is not admin, or if user is not authenticated at all
  if ((requireAdmin && user?.role !== 'admin') || status === 'unauthenticated') {
    return null;
  }

  // Render children if authenticated and has proper permissions
  return <>{children}</>;
}
