import { useAuth } from 'helpers/contexts/auth-context';
import { useNavigate } from 'react-router-dom';

function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {auth.user}! <button onClick={auth.signout}>Sign out</button>
    </p>
  );
}

export default AuthStatus;
