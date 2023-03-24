"use client";

import { useRouter } from "next/navigation";
import ListCard from "../ui/ListCard";

function JobItem(props) {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push("/find-jobs/" + props.id);
  };

  return (
    <li className="m-5 w-40">
      <ListCard>
        <div>
          <h1>{props.title}</h1>
          <h3>{props.company}</h3>
          <p>{props.location}</p>
        </div>
        <div>
          <button
            onClick={showDetailsHandler}
            className="w-full rounded-b-md bg-blue-600  py-2 text-blue-100 duration-75 hover:bg-blue-500 hover:shadow-md"
          >
            Show Details
          </button>
        </div>
      </ListCard>
    </li>
  );
}

export default JobItem;
