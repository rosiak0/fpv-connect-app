"use client";

import { useRouter } from "next/navigation";
import Card from "../ui/Card";

function PilotItem(props) {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push("/" + props.id);
  };

  return (
    <li>
      <Card>
        <div>
          <h3>{props.nickname}</h3>
          <address>{props.location}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default PilotItem;
