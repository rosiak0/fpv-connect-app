import MainNavigation from "./MainNavigation";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

const Layout = (props) => {
  const context = useContext(AppContext);

  const hideNavHandler = () => {
    context.setShowNavLinks(false);
  };
  return (
    <>
      <div className="bg-mainbg">
        <MainNavigation />
        <main onClick={hideNavHandler} className="mt-24">
          {props.children}
        </main>
      </div>
    </>
  );
};

export default Layout;
