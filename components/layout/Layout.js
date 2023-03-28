import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <>
      <div className="bg-mainbg">
        <MainNavigation />
        <main>{props.children}</main>
      </div>
    </>
  );
};

export default Layout;
