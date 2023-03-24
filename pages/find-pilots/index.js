"use client";
import { MongoClient } from "mongodb";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

import PilotsList from "../../components/find-pilots/PilotsList";
import PostJobsForm from "../../components/find-pilots/PostJobsForm";
import Card from "../../components/ui/Card";

const FindPilots = (props) => {
  const router = useRouter();
  const [displayContent, setDisplayContent] = useState(null);

  const addJobHandler = async (enteredJobData) => {
    const response = await fetch("/api/new-job", {
      method: "POST",
      body: JSON.stringify(enteredJobData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
    alert(
      "Posted a job: " + enteredJobData.title + " in " + enteredJobData.location
    );
    router.push("/");
  };

  const displayPilotsHandler = () => {
    setDisplayContent(<PilotsList pilots={props.pilots} />);
  };
  const postJobHandler = () => {
    setDisplayContent(
      <Card>
        <PostJobsForm onAddJob={addJobHandler} />
      </Card>
    );
  };
  return (
    <>
      <Head>
        <title>Find FPV Pilots</title>
        <meta
          name="description"
          content="Search for the best pilots in FPV industry by posting a job or browsing through the list of pilots"
        />
      </Head>
      <img
        className="absolute z-10 h-auto w-full overflow-hidden "
        src="./pilot.jpg"
        alt="Picture of an fpv pilot wearing DJI goggles"
      />
      <main className="relative z-30 pt-24">
        <h1 className="">Find FPV Pilots</h1>
        <div className="flex justify-center">
          <button
            className="m-3 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
            onClick={displayPilotsHandler}
          >
            Browse pilots
          </button>
          <button
            className="m-3 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
            onClick={postJobHandler}
          >
            Post a job
          </button>
        </div>
        <div>{displayContent}</div>
      </main>
    </>
  );
};

export default FindPilots;

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://maciejrosa1:Fk6o59qMk46Z9eLQ@cluster0.at75os5.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();

  const pilotsCollection = db.collection("pilots");

  const pilots = await pilotsCollection.find().toArray();

  client.close();
  //fetch data from an API, database
  return {
    props: {
      pilots: pilots.map((pilot) => ({
        id: pilot._id.toString(),
        name: pilot.name,
        surname: pilot.surname,
        nickname: pilot.nickname,
        location: pilot.location,
        email: pilot.email,
        instagram: pilot.instagram,
        youtube: pilot.youtube,
        video: pilot.video,
        photo: pilot.photo,
      })),
    },
    revalidate: 10,
  };
};
