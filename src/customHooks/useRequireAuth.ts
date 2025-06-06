// hooks/useRequireAuth.ts
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRequireAuth = (): boolean => {
  const [shouldRender, setShouldRender] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('role');
    const username = localStorage.getItem('username');

    if (!role || !username) {
     // Redirect to login if not authenticated
      navigate('/'); 
    } else {
      // Allow rendering if user is logged in
      setShouldRender(true); 
    }
  }, [navigate]);

  return shouldRender;
};
