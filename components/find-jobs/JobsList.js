import ListDisplay from "../ui/ListDisplay";
import JobItem from "./JobItem";

function JobList(props) {
  return (
    <ul className="mt-10">
      <ListDisplay>
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
      </ListDisplay>
    </ul>
  );
}

export default JobList;
