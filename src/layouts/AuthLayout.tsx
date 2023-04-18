import { Outlet } from 'react-router-dom';

import AuthNavBar from '../components/Navbar/AuthNav';

const AuthLayout = (): JSX.Element => (
  <div className="main">
    <AuthNavBar />
    <Outlet />
  </div>
);

export default AuthLayout;
