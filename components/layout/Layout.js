import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <>
      <div>
        <MainNavigation />
        <main className="">{props.children}</main>
      </div>
    </>
  );
};

export default Layout;
