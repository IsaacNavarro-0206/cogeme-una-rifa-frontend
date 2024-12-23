function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="bg-gray-200 h-screen flex flex-col justify-center items-center">
      {children}
    </div>
  );
}

export default Layout;
