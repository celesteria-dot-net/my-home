import type { IconProp } from './iconProp';

const Windows = (icon: IconProp) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...icon}>
    <path d="M22 6v12h-16v-12h16zm2-6h-20v20h20v-20zm-22 22v-19h-2v21h21v-2h-19z" />
  </svg>
);

export default Windows;
