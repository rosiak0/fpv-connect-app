import Link from "next/link";

const PilotDetail = (props) => {
  return (
    <section className="">
      <h1>{`${props.name} "${props.nickname}" ${props.surname}`}</h1>
      <address>{props.location}</address>
      <button className="m-3 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
        <Link href="/find-pilots">Return</Link>
      </button>
    </section>
  );
};

export default PilotDetail;
