// hooks/useConditionalRedirect.ts
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useConditionalRedirect = (): boolean => {
  const [shouldRender, setShouldRender] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('role');
    const username = localStorage.getItem('username');

    if (role && username) {
     // Redirect to user home page if authenticated
      navigate(`/${role}-main/${username}`);
    } else {
      // Allow rendering if user is not logged in
      setShouldRender(true);
    }
  }, [navigate]);

  return shouldRender;
};
