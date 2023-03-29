import Link from "next/link";

const MainNavigation = () => {
  return (
    <header className="fixed top-0 z-30 w-full bg-navyblue p-4 text-lg shadow-lg">
      {/* LOGO!!  */}
      <div className="m-auto flex w-full justify-between lg:w-3/5">
        <Link className="text-yellow" href="/">
          FPV CONNECT
        </Link>
        <nav>
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
