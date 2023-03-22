import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>FPV Connect</title>
        <meta
          name="description"
          content="Find the fpv pilot you need for your next project!"
        />
      </Head>
      <div className="">
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 min-h-full w-auto min-w-full max-w-none"
        >
          <source src="./videoBg.mp4" type="video/mp4" />
        </video>
      </div>
      <main className="relative z-30 py-40  text-white">
        <h1 className="p-10 text-xl">YOUR FILM AND VIDEO PRODUCTION PARTNER</h1>
        <p className="p-10 text-lg">
          We make it easy to find and hire qualified FPV drone pilots for film,
          video and live event realization
        </p>
        <div className="flex justify-center  pt-96 ">
          <button className="hover: m-3 w-96 rounded bg-blue-500 bg-opacity-30 py-2 px-4 font-bold text-white hover:scale-105 hover:bg-blue-500 hover:bg-opacity-80 hover:shadow-xl">
            <Link href="/find-pilots">
              <h4>FIND PILOTS</h4>
              <p>I need to hire.</p>
            </Link>
          </button>
          <button className="m-3 w-96 rounded bg-blue-500 bg-opacity-30 py-2 px-4 font-bold text-white hover:scale-105 hover:bg-blue-500 hover:bg-opacity-80 hover:shadow-xl">
            <Link href="/find-jobs">
              <h4>FIND JOBS </h4>
              <p>I want to get hired.</p>
            </Link>
          </button>
        </div>
      </main>
    </>
  );
}
