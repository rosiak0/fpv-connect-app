"use client";

import { useRouter } from "next/navigation";
import ListCard from "../ui/ListCard";

function PilotItem(props) {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push("/" + props.id);
  };

  return (
    <li className="my-5">
      <ListCard>
        <div className="text-gray-800  p-3 block justify-self-center">
          <h3>{props.nickname}</h3>
          <address>{props.location}</address>
        </div>
        <div>
          <button
            onClick={showDetailsHandler}
            className="w-full rounded-b-md bg-blue-600  py-2 text-blue-100 hover:bg-blue-500 hover:shadow-md duration-75"
          >
            Show Details
          </button>
        </div>
      </ListCard>
    </li>
  );
}

export default PilotItem;
