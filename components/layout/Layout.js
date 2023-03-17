import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <>
      <div>
        <MainNavigation />
        <main className="h-screen px-10 py-44">{props.children}</main>
      </div>
    </>
  );
};

export default Layout;
