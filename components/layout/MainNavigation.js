import Link from "next/link";

const MainNavigation = () => {
  return (
    <header className="fixed top-0 z-30 w-full bg-navyblue p-4 text-lg shadow-lg">
      {/* LOGO!!  */}
      <div className="m-auto flex w-full justify-between px-6 lg:w-3/5 lg:px-0">
        <Link className="text-yellow" href="/">
          FPV CONNECT
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="rgb(253 201 73)"
          className="h-7 w-7 md:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <nav className="hidden md:block">
          <ul className="flex justify-start">
            <li className="mx-3 text-yellow">
              <Link href="/find-pilots">Find Pilots</Link>
            </li>
            <li className="mx-3 text-yellow">
              <Link href="/find-jobs">Find Jobs</Link>
            </li>
            <li className="mx-3 text-yellow">
              <Link href="">SIGN IN</Link>
            </li>
            <li className="ml-3 text-yellow">
              <Link href="">JOIN</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
