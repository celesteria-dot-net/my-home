import { Link } from 'react-router-dom';

import { PathWithIcon } from '@/paths';

type Prop = { paths: PathWithIcon[] };

const NavBar = ({ paths }: Prop) => (
  <nav>
    <ul className="menu menu-horizontal">
      {paths.map(({ path, title, icon }) => (
        <li key={path}>
          <Link to={path}>
            <div className="flex flex-col md:flex-row items-center">
              {icon}
              <p className="ml-0 md:ml-3 mt-1 md:mt-0">{title}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBar;
