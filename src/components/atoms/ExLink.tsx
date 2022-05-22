/* eslint-disable react/jsx-props-no-spreading */

const ExLink = ({
  children,
  ...props
}: JSX.HTMLAttributes<HTMLAnchorElement>) => (
  <a {...props} target="_blank" rel="noreferrer">
    {children}
  </a>
);

export default ExLink;
