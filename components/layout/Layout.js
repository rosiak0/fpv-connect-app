import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <>
      <div className="bg-mainbg">
        <MainNavigation />
        <main className="mt-24">{props.children}</main>
      </div>
    </>
  );
};

export default Layout;
