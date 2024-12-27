function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="bg-gray-200 min-h-screen h-auto flex flex-col justify-start items-center pt-5">
      {children}
    </div>
  );
}

export default Layout;
