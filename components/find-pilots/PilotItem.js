"use client";

import { useRouter } from "next/navigation";

import ListButton from "../ui/ListButton";
import ListCard from "../ui/ListCard";

function PilotItem(props) {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push("/find-pilots/" + props.id);
  };

  return (
    <li className="mx-5 mb-10 w-56">
      <ListCard>
        <div>
          <img
            className="h-full w-full "
            src={props.photo}
            alt={props.nickname}
          />
        </div>
        <div>
          <h3>{props.nickname}</h3>
          <address>{props.location}</address>
        </div>

        <div>
          <ListButton>
            <button className="w-full" onClick={showDetailsHandler}>
              Show Details
            </button>
          </ListButton>
        </div>
      </ListCard>
    </li>
  );
}

export default PilotItem;
