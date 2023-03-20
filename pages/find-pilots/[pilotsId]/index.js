import { MongoClient, ObjectId } from "mongodb";

import Head from "next/head";

import PilotDetail from "../../../components/find-pilots/PilotDetail";

const PilotDetails = (props) => {
  return (
    <>
      <Head>
        <title>{props.pilotData.title}</title>
        <meta name="description" content={props.pilotData.description} />
      </Head>
      <PilotDetail
        name={props.pilotData.name}
        surname={props.pilotData.surname}
        nickname={props.pilotData.nickname}
        location={props.pilotData.location}
      />
    </>
  );
};

export default PilotDetails;

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://maciejrosa1:Fk6o59qMk46Z9eLQ@cluster0.at75os5.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();

  const pilotsCollection = db.collection("pilots");

  const pilots = await pilotsCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: "blocking",
    paths: pilots.map((pilot) => ({
      params: {
        pilotId: pilot._id.toString(),
      },
    })),
  };
};
