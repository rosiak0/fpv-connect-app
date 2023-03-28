"use client";
import { MongoClient } from "mongodb";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

import PilotsList from "../../components/find-pilots/PilotsList";
import PostJobsForm from "../../components/find-pilots/PostJobsForm";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Content from "../../components/ui/Content";

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
      <Content>
        {/* <img
          className="absolute z-10 h-auto w-full overflow-hidden "
          src="./pilot.jpg"
          alt="Picture of an fpv pilot wearing DJI goggles"
        /> */}
        <main className="">
          <h1 className="pb-10 text-4xl">
            GREAT PRODUCTIONS START WITH GREAT CREWS.
          </h1>
          <p className="pb-20 text-lg">
            Whether you need an operator for a day, a month or a full-time FPV
            pilot for your project, we're here to help you out.
          </p>
          <div className="flex justify-center">
            <Button>
              <button onClick={displayPilotsHandler}>Browse pilots</button>
            </Button>
            <Button>
              <button onClick={postJobHandler}>Post a job</button>
            </Button>
          </div>
          <div>{displayContent}</div>
        </main>
      </Content>
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
