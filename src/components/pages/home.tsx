import ExLink from '@/components/atoms/ExLink';
import NavBar from '@/containers/molecules/navBar';
import { PathWithIcon } from '@/paths';

type Prop = {
  externalPaths: PathWithIcon[];
};

const Home = ({ externalPaths }: Prop) => (
  <div className="hero min-h-screen max-h-screen min-w-min max-w-full">
    <div className="hero-overlay bg-opacity-50" />
    <div className="hero-content text-center text-neutral-content max-w-md flex flex-col">
      <h1 className="text-4xl font-bold">Lucky</h1>
      <div className="divider" />
      <div className="text-xl">
        <NavBar className="w-8" fill="white" />
      </div>
      <div className="divider" />
      <div className="btn-group">
        {externalPaths.map(({ path, icon }) => (
          <ExLink href={path} className="btn btn-ghost" key={path}>
            {icon}
          </ExLink>
        ))}
      </div>
    </div>
  </div>
);

export default Home;
