import PilotItem from "./PilotItem";

function PilotList(props) {
  return (
    <ul className="">
      {props.pilots.map((pilot) => (
        <PilotItem
          key={pilot.id}
          id={pilot.id}
          name={pilot.nickname}
          nickname={pilot.nickname}
          location={pilot.location}
        />
      ))}
    </ul>
  );
}

export default PilotList;
