import Link from "next/link";

export default function Home(props) {
  return (
    <main>
      <h1>YOUR FILM AND VIDEO PRODUCTION PARTNER</h1>
      <p>
        We make it easy to find and hire qualified FPV drone pilots for film,
        video and live event realization
      </p>
      <div className="flex justify-center">
        <button className="bg-blue-500 bg-opacity-50 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3 ">
          <Link href="/find-pilots">
            <h4>FIND FPV PILOTS</h4>
            <p>I need to hire.</p>
          </Link>
        </button>
        <button className="bg-blue-500 bg-opacity-50 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3 ">
          <Link href="/find-jobs">
            <h4>FIND FPV JOBS </h4>
            <p>I want to get hired.</p>
          </Link>
        </button>
      </div>
    </main>
  );
}
