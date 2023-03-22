import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <>
      <div>
        <MainNavigation />
        <main className="h-screen">{props.children}</main>
      </div>
    </>
  );
};

export default Layout;
