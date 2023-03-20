import { MongoClient, ObjectId } from "mongodb";

import Head from "next/head";

import PilotDetail from "../../../components/find-pilots/PilotDetail";

const PilotDetails = (props) => {
  return (
    <>
      <Head>
        <title>{props.pilotData.nickname}</title>
        <meta
          name="description"
          content={`One of the best FPV pilots in ${props.pilotData.location}`}
        />
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

export const getStaticProps = async (context) => {
  const pilotId = context.params.pilotId;

  const client = await MongoClient.connect(
    "mongodb+srv://maciejrosa1:Fk6o59qMk46Z9eLQ@cluster0.at75os5.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();

  const pilotsCollection = db.collection("pilots");

  const pilotIdObject = new ObjectId(pilotId);

  const selectedPilot = await pilotsCollection.findOne({
    _id: pilotIdObject,
  });

  client.close();
  //fetch data from an API, database
  return {
    props: {
      pilotData: {
        id: selectedPilot._id.toString(),
        name: selectedPilot.name,
        surname: selectedPilot.surname,
        nickname: selectedPilot.nickname,
        location: selectedPilot.location,
      },
    },
    revalidate: 10,
  };
};
