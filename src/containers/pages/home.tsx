import Home from '@/components/pages/home';
import { externalPaths } from '@/paths';

const EnhancedHome = () => (
  <Home externalPaths={externalPaths({ className: 'w-8' })} />
);

export default EnhancedHome;
