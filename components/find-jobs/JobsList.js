import JobItem from "./JobItem";

function JobList(props) {
  return (
    <ul className="flex">
      {props.jobs.map((job) => (
        <JobItem
          key={job.id}
          id={job.id}
          title={job.title}
          description={job.description}
          company={job.company}
          location={job.location}
          email={job.email}
        />
      ))}
    </ul>
  );
}

export default JobList;
