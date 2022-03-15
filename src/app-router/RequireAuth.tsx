import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'helpers/contexts/auth-context';

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();
  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
}

export default RequireAuth;
