import Link from "next/link";

const MainNavigation = () => {
  return (
    <header className="bg-gray-900 flex justify-between p-5">
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
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
