import { useLocation } from 'react-router-dom';

import { IconProp } from '@/components/atoms/icons';
import NavBar from '@/components/molecules/navBar';
import { internalIcons } from '@/paths';

const ExtendedNavBar = (props: IconProp) => {
  const loc = useLocation();
  const paths = Object.values(internalIcons({ ...props })).filter(
    ({ path }) => path !== loc.pathname,
  );

  return <NavBar paths={paths} />;
};

export default ExtendedNavBar;
