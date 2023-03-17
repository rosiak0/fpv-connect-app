"use client";
import { useState } from "react";
import JobsList from "../../components/find-jobs/JobsList";
import CreatePilotProfileForm from "../../components/find-jobs/CreatePilotProfileForm";
import Card from "../../components/ui/Card";
import { useRouter } from "next/navigation";

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
      <h1 className="">Find Jobs</h1>
      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
          onClick={displayJobsHandler}
        >
          Browse jobs
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
          onClick={createProfileHandler}
        >
          Create a profile
        </button>
      </div>
      <div>{displayContent}</div>
    </>
  );
};

export default FindJobs;
