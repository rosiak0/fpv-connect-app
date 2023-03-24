"use client";

import { useRouter } from "next/navigation";
import Button from "../ui/Button";
import ListCard from "../ui/ListCard";

function PilotItem(props) {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push("/find-pilots/" + props.id);
  };

  return (
    <li className="m-5 w-40">
      <ListCard>
        <div>
          <img className="h-40 w-40 " src={props.photo} alt={props.nickname} />
        </div>
        <div className=" text-gray-900">
          <h3>{props.nickname}</h3>
          <address>{props.location}</address>
        </div>

        <div>
          <Button>
            <button onClick={showDetailsHandler}>Show Details</button>
          </Button>
        </div>
      </ListCard>
    </li>
  );
}

export default PilotItem;
