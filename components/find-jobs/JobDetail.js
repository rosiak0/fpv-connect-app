import Link from "next/link";

const JobDetail = (props) => {
  return (
    <section className="mx-auto max-w-fit overflow-hidden rounded-xl bg-gray-900 pt-24 shadow-md">
      <div className="mb-6 mt-3 text-center">
        <h1>{props.title}</h1>
        <h2>{props.company}</h2>
        <address>{props.location}</address>
        <p>{props.description}</p>
      </div>
      <div className="flex justify-center">
        <a
          href={`mailto: ${props.email}`}
          className="mx-2 hover:scale-105 hover:shadow-xl"
        >
          Send Email
        </a>
      </div>
      <button className="m-3 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
        <Link href="/find-jobs">Return</Link>
      </button>
    </section>
  );
};

export default JobDetail;
