"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import JobsList from "../../components/find-jobs/JobsList";
import CreatePilotProfileForm from "../../components/find-jobs/CreatePilotProfileForm";
import Card from "../../components/ui/Card";

const FindJobs = () => {
  const router = useRouter();
  const [displayContent, setDisplayContent] = useState(null);

  const addPilotHandler = async (enteredPilotData) => {
    const response = await fetch("/api/new-pilot", {
      method: "POST",
      body: JSON.stringify(enteredPilotData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
    alert("Pilot added! Welcome " + enteredPilotData.nickname);
    router.push("/");
  };

  const displayJobsHandler = () => {
    setDisplayContent(<JobsList />);
  };
  const createProfileHandler = () => {
    setDisplayContent(
      <Card>
        <CreatePilotProfileForm onAddPilot={addPilotHandler} />
      </Card>
    );
  };
  return (
    <>
      <Head>
        <title>Find FPV Jobs</title>
        <meta
          name="description"
          content="Search for FPV jobs. Create a pilot profile or browsing through the list of FPV jobs"
        />
      </Head>
      <img
        className="absolute z-10 h-auto w-full overflow-hidden "
        src="./jobs.jpg"
        alt="Picture of an fpv pilot wearing DJI goggles"
      />
      <main className="relative z-30 pt-24">
        <h1 className="">Find Jobs</h1>
        <div className="flex justify-center">
          <button
            className="m-3 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
            onClick={displayJobsHandler}
          >
            Browse jobs
          </button>
          <button
            className="m-3 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
            onClick={createProfileHandler}
          >
            Create a profile
          </button>
        </div>
        <div>{displayContent}</div>
      </main>
    </>
  );
};

export default FindJobs;
