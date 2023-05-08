import React from 'react';
import { useRoutes } from 'react-router-dom';

import AuthLayout from '../layouts/AuthLayout';

import authenticationRoutes from './AuthRoutes';

// ----------------------------------------------------------------------

const Router: React.FC = () =>
  useRoutes([
    {
      element: <AuthLayout />,
      children: authenticationRoutes,
    },
  ]);

export default Router;
