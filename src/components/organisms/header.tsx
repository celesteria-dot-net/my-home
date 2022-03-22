import { Link } from 'react-router-dom';

import SiteLogo from '@/components/atoms/siteLogo';
import { PathWithIcon } from '@/paths';

type Prop = { paths: PathWithIcon[] };

const Header = ({ paths }: Prop) => (
  <div className="navbar bg-blue-300 flex-col md:flex-row">
    <div className="flex-1">
      <SiteLogo />
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal">
        {paths.map(({ path, title }) => (
          <li key={path}>
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Header;
