import { Link } from 'react-router-dom';

import SiteLogo from '@/components/atoms/siteLogo';
import NavBar from '@/containers/molecules/navBar';
import { internalPaths } from '@/paths';

const Header = () => (
  <header className="navbar bg-blue-300 flex-col md:flex-row sticky top-0 z-20">
    <div className="flex-1">
      <Link to={internalPaths.home.path}>
        <SiteLogo />
      </Link>
    </div>
    <div className="flex-none">
      <NavBar className="w-5" fill="black" />
    </div>
  </header>
);

export default Header;
