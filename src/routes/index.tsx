import { useRoutes } from 'react-router-dom';

import { protectedRoutes } from '@/routes/protected';

export const AppRoutes = () => {
  const element = useRoutes(protectedRoutes);

  return <>{element}</>;
};
