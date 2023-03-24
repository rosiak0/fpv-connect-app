import { MongoClient, ObjectId } from "mongodb";

import Head from "next/head";

import JobDetail from "../../../components/find-jobs/JobDetail";

const JobDetails = (props) => {
  return (
    <>
      <Head>
        <title>{props.jobData.title}</title>
        <meta
          name="description"
          content={`FPV job in ${props.jobData.location}`}
        />
      </Head>
      <JobDetail
        title={props.jobData.title}
        location={props.jobData.location}
        company={props.jobData.company}
        description={props.jobData.description}
        email={props.jobData.email}
      />
    </>
  );
};

export default JobDetails;

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://maciejrosa1:Fk6o59qMk46Z9eLQ@cluster0.at75os5.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();

  const jobsCollection = db.collection("jobs");

  const jobs = await jobsCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: "blocking",
    paths: jobs.map((job) => ({
      params: {
        jobId: job._id.toString(),
      },
    })),
  };
};

export const getStaticProps = async (context) => {
  const jobId = context.params.jobId;

  const client = await MongoClient.connect(
    "mongodb+srv://maciejrosa1:Fk6o59qMk46Z9eLQ@cluster0.at75os5.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();

  const jobsCollection = db.collection("jobs");

  const jobIdObject = new ObjectId(jobId);

  const selectedJob = await jobsCollection.findOne({
    _id: jobIdObject,
  });

  client.close();
  //fetch data from an API, database
  return {
    props: {
      jobData: {
        id: selectedJob._id.toString(),
        title: selectedJob.title,
        company: selectedJob.company,
        description: selectedJob.description,
        location: selectedJob.location,
        email: selectedJob.email,
      },
    },
    revalidate: 10,
  };
};
