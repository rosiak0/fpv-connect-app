import Link from "next/link";
import Head from "next/head";
import ButtonLarge from "../components/ui/ButtonLarge";

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
      <div className="absolute top-10 right-0 z-0 h-screen w-full overflow-hidden">
        <video autoPlay loop muted className="w-full">
          <source src="./videoBg.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10 flex max-h-screen w-full overflow-hidden rounded-lg text-lg text-yellow shadow-lg lg:m-auto lg:w-3/5 lg:border-2">
        <main className="z-10 mx-auto px-10 pb-20 lg:pt-56">
          <h1 className="pb-10 text-5xl">
            YOUR FILM AND VIDEO PRODUCTION PARTNER
          </h1>
          <p className="pb-16 text-lg lg:pb-72">
            We make it easy to find and hire qualified FPV drone pilots for
            film, video and live event realization
          </p>

          <div className="flex flex-wrap justify-center ">
            <div>
              <ButtonLarge>
                <button className="w-full">
                  <Link href="/find-pilots">
                    <h4>FIND PILOTS</h4>
                  </Link>
                </button>
              </ButtonLarge>
              <p className="text-center"> I need to hire.</p>
            </div>
            <div>
              <ButtonLarge>
                <button className="w-full">
                  <Link href="/find-jobs">
                    <h4>FIND JOBS </h4>
                  </Link>
                </button>
              </ButtonLarge>
              <p className="text-center">I want to get hired.</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
