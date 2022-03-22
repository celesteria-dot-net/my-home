import baseHeadingClass from './shared';

const Heading2 = ({
  children,
  ...props
}: JSX.HTMLAttributes<HTMLHeadingElement>) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <h2 {...props} className={`${baseHeadingClass} text-2xl`}>
    {children}
  </h2>
);

export default Heading2;
