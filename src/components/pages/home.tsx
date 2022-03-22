import { Link } from 'react-router-dom';

import ExLink from '@/components/atoms/ExLink';
import { externalPaths, internalIcons, internalPaths } from '@/paths';

const Home = () => (
  <div className="hero min-h-screen max-h-screen min-w-min max-w-full">
    <div className="hero-overlay bg-opacity-50" />
    <div className="hero-content text-center text-neutral-content max-w-md flex flex-col">
      <h1 className="text-4xl font-bold">Lucky (Lucky3028)</h1>
      <div className="divider" />
      <ul className="menu menu-vertical md:menu-horizontal rounded-box text-xl">
        {Object.values(internalIcons({ className: 'w-8', fill: 'white' }))
          .filter(({ path }) => path !== internalPaths.home.path)
          .map(({ path, icon, title }) => (
            <li key={path}>
              <Link to={path}>
                {icon}
                {title}
              </Link>
            </li>
          ))}
      </ul>
      <div className="divider" />
      <div className="btn-group">
        {externalPaths({ className: 'w-8' }).map(({ path, icon }) => (
          <ExLink href={path} className="btn btn-ghost" key={path}>
            {icon}
          </ExLink>
        ))}
      </div>
    </div>
  </div>
);

export default Home;
