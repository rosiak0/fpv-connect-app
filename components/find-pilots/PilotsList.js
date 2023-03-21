import PilotItem from "./PilotItem";

function PilotList(props) {
  return (
    <ul className="flex">
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
    </ul>
  );
}

export default PilotList;
