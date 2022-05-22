const Container = ({
  children,
  ...props
}: JSX.HTMLAttributes<HTMLDivElement>) => (
  <main className="flex justify-center">
    <div
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      className="container my-3 p-3 mx-8 md:mx-40 min-h-min min-w-min w-full"
    >
      {children}
    </div>
  </main>
);

export default Container;
