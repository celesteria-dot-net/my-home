const Container = ({
  children,
  ...props
}: JSX.HTMLAttributes<HTMLDivElement>) => (
  <div
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    className="container p-3 px-7 mt-3 md:px-20 min-h-min min-w-min"
  >
    {children}
  </div>
);

export default Container;
