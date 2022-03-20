/* eslint-disable react/jsx-props-no-spreading */
import * as icons from '@/components/atoms/icons';

type pages = 'home' | 'about' | 'posts' | 'apps';
type PathWithIcon = {
  path: string;
  title: string;
  icon: JSX.Element;
};
type Path = Pick<PathWithIcon, 'path' | 'title'>;

const internalPaths: Record<pages, Path> = {
  home: { path: '/', title: 'Home' },
  about: { path: '/about', title: 'About' },
  posts: { path: '/posts', title: 'Posts' },
  apps: { path: '/apps', title: 'Apps' },
};

const internalIcons = (icon: icons.IconProp): Record<pages, PathWithIcon> => ({
  home: { ...internalPaths.home, icon: <icons.Home {...icon} /> },
  about: { ...internalPaths.about, icon: <icons.CircledQuestion {...icon} /> },
  posts: { ...internalPaths.posts, icon: <icons.Notes {...icon} /> },
  apps: { ...internalPaths.apps, icon: <icons.Windows {...icon} /> },
});

const externalPaths = (icon: icons.ColoredIconProp): PathWithIcon[] => [
  {
    path: 'http://twitter.com/Lucky3028',
    title: 'Twitter',
    icon: <icons.Twitter {...icon} />,
  },
  {
    path: 'http://github.com/Lucky3028',
    title: 'GitHub',
    icon: <icons.GitHub {...icon} />,
  },
];

export { internalPaths, internalIcons, externalPaths };
