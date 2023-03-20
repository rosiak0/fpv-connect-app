"use client";
import { MongoClient } from "mongodb";

import { useState } from "react";
import PilotsList from "../../components/find-pilots/PilotsList";
import PostJobsForm from "../../components/find-pilots/PostJobsForm";
import Card from "../../components/ui/Card";

const FindPilots = (props) => {
  const [displayContent, setDisplayContent] = useState(null);

  const addJobHandler = (enteredJobData) => {
    alert(
      "Posted a job: " + enteredJobData.title + " in " + enteredJobData.location
    );
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
      <h1 className="">Find FPV Pilots</h1>
      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
          onClick={displayPilotsHandler}
        >
          Browse pilots
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
          onClick={postJobHandler}
        >
          Post a job
        </button>
      </div>
      <div>{displayContent}</div>
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
      })),
    },
    revalidate: 10,
  };
};
