import { Link } from 'react-router-dom';

import SiteLogoBtn from '@/components/molecules/SiteLogoBtn';
import NavBar from '@/containers/molecules/NavBar';
import { internalPaths } from '@/paths';

const Header = () => (
  <header className="navbar bg-blue-300 flex-col md:flex-row sticky top-0 z-20">
    <div className="flex-1">
      <Link to={internalPaths.home.path}>
        <h1>
          <SiteLogoBtn />
        </h1>
      </Link>
    </div>
    <div className="flex-none">
      <NavBar className="w-5" fill="black" />
    </div>
  </header>
);

export default Header;
