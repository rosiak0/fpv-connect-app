import Link from "next/link";

const MainNavigation = () => {
  return (
    <header className="flex w-full justify-between bg-gray-900 p-4">
      <Link className="mx-3" href="/">
        FPV CONNECT
      </Link>
      <nav>
        <ul className="flex justify-start">
          <li className="mx-3">
            <Link href="/find-pilots">Find Pilots</Link>
          </li>
          <li className="mx-3">
            <Link href="/find-jobs">Find Jobs</Link>
          </li>
          <li className="mx-3">
            <Link href="">SIGN IN</Link>
          </li>
          <li className="mx-3">
            <Link href="">JOIN</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
