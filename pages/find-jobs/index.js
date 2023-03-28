"use client";
import { MongoClient } from "mongodb";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

import JobsList from "../../components/find-jobs/JobsList";
import CreatePilotProfileForm from "../../components/find-jobs/CreatePilotProfileForm";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Content from "../../components/ui/Content";

const FindJobs = (props) => {
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
    setDisplayContent(<JobsList jobs={props.jobs} />);
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
      <Content>
        <main className="">
          <h1 className="pb-10 text-4xl">TAKE THE WORK OUT OF FINDING WORK.</h1>
          <p className=" pb-20 text-lg">
            We take the hassle out of job searching. Find work in film and video
            production that meets your unique skill-set, anywhere at any time.
          </p>
          <div className="flex justify-center">
            <Button>
              <button className="w-full" onClick={displayJobsHandler}>
                Browse jobs
              </button>
            </Button>
            <Button>
              <button className="w-full" onClick={createProfileHandler}>
                Create a profile
              </button>
            </Button>
          </div>
          <div>{displayContent}</div>
        </main>
      </Content>

    </>
  );
};

export default FindJobs;

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://maciejrosa1:Fk6o59qMk46Z9eLQ@cluster0.at75os5.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();

  const jobsCollection = db.collection("jobs");

  const jobs = await jobsCollection.find().toArray();

  client.close();

  return {
    props: {
      jobs: jobs.map((job) => ({
        id: job._id.toString(),
        title: job.title,
        description: job.description,
        location: job.location,
        company: job.company,
        email: job.email,
      })),
    },
    revalidate: 10,
  };
};
