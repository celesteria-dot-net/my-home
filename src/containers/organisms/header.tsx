import { useLocation } from 'react-router-dom';

import Header from '@/components/organisms/header';
import { internalIcons } from '@/paths';

const EnhancedHeader = () => {
  const loc = useLocation();
  // TODO: Pathだけでよいのでは？
  const paths = Object.values(
    internalIcons({ className: 'w-8', fill: 'black' }),
  ).filter(({ path }) => path !== loc.pathname);

  return <Header paths={paths} />;
};

export default EnhancedHeader;
