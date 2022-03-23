const Container = ({
  children,
  ...props
}: JSX.HTMLAttributes<HTMLDivElement>) => (
  <div className="flex justify-center">
    <div
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      className="container mt-3 p-3 px-4 md:px-20 min-h-min min-w-min"
    >
      {children}
    </div>
  </div>
);

export default Container;
