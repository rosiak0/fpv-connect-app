import Link from "next/link";

const PilotDetail = (props) => {
  return (
    <section className="mx-auto max-w-fit overflow-hidden rounded-xl bg-gray-900 pt-24 shadow-md">
      <iframe
        className=" aspect-video"
        width="640px"
        height="338px"
        src={props.video.replace("/watch?v=", "/embed/")}
        title="YouTube video player"
        frameborder="0"
        allowfullscreen="true"
      ></iframe>
      <div className="mb-6 mt-3 text-center">
        <h1>{`${props.name} "${props.nickname}" ${props.surname}`}</h1>
        <address>{props.location}</address>
      </div>
      <div className="flex justify-center">
        <a
          href={props.instagram}
          className="mx-2 hover:scale-105 hover:shadow-xl"
        >
          Instagram
        </a>
        <a
          href={props.youtube}
          className="mx-2 hover:scale-105 hover:shadow-xl"
        >
          Youtube
        </a>
        <a
          href={`mailto: ${props.email}`}
          className="mx-2 hover:scale-105 hover:shadow-xl"
        >
          Send Email
        </a>
      </div>
      <button className="m-3 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
        <Link href="/find-pilots">Return</Link>
      </button>
    </section>
  );
};

export default PilotDetail;
