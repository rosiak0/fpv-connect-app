"use client";

import { useRouter } from "next/navigation";
import ListCard from "../ui/ListCard";

function PilotItem(props) {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push("/find-pilots/" + props.id);
  };

  return (
    <li className="my-5">
      <ListCard>
        <div className="block  justify-self-center p-3 text-gray-800">
          <h3>{props.nickname}</h3>
          <address>{props.location}</address>
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

export default PilotItem;
