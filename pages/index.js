import Link from "next/link";
import Head from "next/head";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>FPV Connect</title>
        <meta
          name="description"
          content="Find the fpv pilot you need for your next project!"
        />
      </Head>
      <main>
        <h1>YOUR FILM AND VIDEO PRODUCTION PARTNER</h1>
        <p>
          We make it easy to find and hire qualified FPV drone pilots for film,
          video and live event realization
        </p>
        <div className="flex justify-center">
          <button className="m-3 w-screen rounded bg-blue-500 bg-opacity-50 py-2 px-4 font-bold text-white hover:bg-blue-700">
            <Link href="/find-pilots">
              <h4>FIND FPV PILOTS</h4>
              <p>I need to hire.</p>
            </Link>
          </button>
          <button className="m-3 w-screen rounded bg-blue-500 bg-opacity-50 py-2 px-4 font-bold text-white hover:bg-blue-700">
            <Link href="/find-jobs">
              <h4>FIND FPV JOBS </h4>
              <p>I want to get hired.</p>
            </Link>
          </button>
        </div>
      </main>
    </>
  );
}
