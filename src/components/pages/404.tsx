import { Link } from 'react-router-dom';

import SiteLogoBtn from '@/components/molecules/SiteLogoBtn';
import NavBar from '@/containers/molecules/NavBar';
import { internalPaths } from '@/paths';

const NotFound = () => (
  <div className="hero min-h-screen max-h-screen min-w-min max-w-full">
    <div className="hero-overlay bg-opacity-50" />
    <div className="hero-content flex flex-col justify-center max-w-md text-center">
      <Link to={internalPaths.home.path}>
        <h1>
          <SiteLogoBtn />
        </h1>
      </Link>
      <p>ご指定のページは見つかりませんでした。</p>
      <div className="divider" />
      <NavBar className="w-5" fill="black" />
    </div>
  </div>
);

export default NotFound;
