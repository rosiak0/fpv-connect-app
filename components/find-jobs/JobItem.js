"use client";

import { useRouter } from "next/navigation";
import ListButton from "../ui/ListButton";

import ListCard from "../ui/ListCard";

function JobItem(props) {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push("/find-jobs/" + props.id);
  };

  return (
    <li className="m-5 w-96 text-center">
      <ListCard>
        <div>
          <h1>{props.title}</h1>
          <h3>{props.company}</h3>
          <p>{props.location}</p>
        </div>
        <div>
          <ListButton>
            <button onClick={showDetailsHandler}>Show Details</button>
          </ListButton>
        </div>
      </ListCard>
    </li>
  );
}

export default JobItem;
