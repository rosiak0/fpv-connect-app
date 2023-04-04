import Link from "next/link";

import AppContext from "../../context/AppContext";

import { useSession, signOut } from "next-auth/react";

import { useContext } from "react";

const MainNavigation = () => {
  const { data: session } = useSession();

  const context = useContext(AppContext);

  const showNavHandler = () => {
    context.setShowNavLinks(!context.showNavLinks);
  };
  const hideNavHandler = () => {
    context.setShowNavLinks(false);
  };
  return (
    <header className="fixed top-0 z-30 w-full bg-navyblue text-lg shadow-lg lg:px-0">
      <nav className="m-auto flex w-full flex-wrap justify-between p-4 px-9  lg:w-3/5 lg:px-0 ">
        <div className="w-1/2 md:w-1/3">
          {/* <header className="fixed top-0 z-30 w-full bg-navyblue p-4 text-lg shadow-lg">
      <nav>
        <div className="m-auto flex w-full justify-between px-6 lg:w-3/5 lg:px-0"> */}
          <Link onClick={hideNavHandler} className="text-yellow" href="/">
            FPV CONNECT
          </Link>
        </div>
        <div className="w-2/2">
          <button
            onClick={showNavHandler}
            // type="button"
            class="text-md inline-flex items-center rounded-sm  hover:scale-105 focus:outline-none focus:ring-1 focus:ring-highlight md:hidden"
            // aria-expanded={showNavLinks}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              // aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="rgb(253 201 73)"
              className="h-6 w-6 md:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        {/* LINKS */}
        <div
          className={`${
            context.showNavLinks ? "block" : "hidden"
          }  w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <div className="flex flex-col md:mx-auto md:flex-row">
            <ul
              className={
                context.showNavLinks
                  ? "flex flex-col text-center"
                  : "hidden md:flex"
              }
            >
              <li onClick={hideNavHandler} className="mx-3 text-yellow">
                <Link href="/find-pilots">Find Pilots</Link>
              </li>
              <li onClick={hideNavHandler} className="mx-3 text-yellow">
                <Link href="/find-jobs">Find Jobs</Link>
              </li>
              {session && (
                <li onClick={hideNavHandler} className="ml-3 text-yellow">
                  <Link href="/account">Account</Link>
                </li>
              )}
              {session ? (
                <li onClick={hideNavHandler} className="mx-3 text-yellow">
                  <button
                    onClick={() => {
                      return signOut();
                    }}
                  >
                    Log out
                  </button>
                </li>
              ) : (
                <li onClick={hideNavHandler} className="mx-3 text-yellow">
                  <Link href="/login">Log in</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
