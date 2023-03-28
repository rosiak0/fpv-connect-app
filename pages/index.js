import Link from "next/link";
import Head from "next/head";
import Content from "../components/ui/Content";
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
      <Content className="flex">
        {/* <div className="top absolute z-10  h-full min-w-full max-w-none overflow-hidden object-right"> */}
        {/* <div className="absolute right-0  z-10 h-full w-3/5 overflow-hidden">
          <video autoPlay loop muted className="w-full">
            <source src="./videoBg.mp4" type="video/mp4" />
          </video>
        </div> */}
        <main>
          <h1 className="pb-10 text-5xl">
            YOUR FILM AND VIDEO PRODUCTION PARTNER
          </h1>
          <p className="pb-20 text-lg">
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
      </Content>
    </>
  );
}
