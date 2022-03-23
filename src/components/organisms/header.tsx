import SiteLogo from '@/components/atoms/siteLogo';
import NavBar from '@/containers/molecules/navBar';

const Header = () => (
  <div className="navbar bg-blue-300 flex-col md:flex-row">
    <div className="flex-1">
      <SiteLogo />
    </div>
    <div className="flex-none">
      <NavBar className="w-5" fill="black" />
    </div>
  </div>
);

export default Header;
