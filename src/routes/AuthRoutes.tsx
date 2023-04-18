import { Navigate } from 'react-router-dom';

import LoginPage from '../pages/loginPage/LoginPage';
import SignupPage from '../pages/signupPage/SignUpPage';

const authenticationRoutes = [
  { path: '/', element: <Navigate to="/login" replace />, index: true },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
];

export default authenticationRoutes;
