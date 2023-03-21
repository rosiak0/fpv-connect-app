"use client";

import { useRouter } from "next/navigation";
import ListCard from "../ui/ListCard";

function PilotItem(props) {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push("/find-pilots/" + props.id);
  };

  return (
    <li className="m-5 ">
      <ListCard>
        <div>
          <img className="h-40 w-40 " src={props.photo} alt={props.nickname} />
        </div>
        {/* <div className="  block justify-self-center  text-gray-800">
          <iframe
            className="mx-auto"
            width="100%x"
            height="203px"
            src={props.video.replace("/watch?v=", "/embed/")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div> */}
        <div className=" text-gray-900">
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
