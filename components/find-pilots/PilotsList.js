import ListDisplay from "../ui/ListDisplay";
import PilotItem from "./PilotItem";

function PilotList(props) {
  return (
    <div className="mx-auto mt-10">
      <ul>
        <ListDisplay>
          {props.pilots.map((pilot) => (
            <PilotItem
              key={pilot.id}
              id={pilot.id}
              name={pilot.nickname}
              nickname={pilot.nickname}
              location={pilot.location}
              email={pilot.email}
              instagram={pilot.instagram}
              youtube={pilot.youtube}
              video={pilot.video}
              photo={pilot.photo}
            />
          ))}
        </ListDisplay>
      </ul>{" "}
    </div>
  );
}

export default PilotList;
