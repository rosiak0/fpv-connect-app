import Link from "next/link";
import Button from "../ui/Button";

const JobDetail = (props) => {
  return (
    <section className="mx-auto mt-24 max-w-fit overflow-hidden rounded-xl bg-gray-900 shadow-md">
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
      <Button>
        <button>
          <Link href="/find-jobs">Return</Link>
        </button>
      </Button>
    </section>
  );
};

export default JobDetail;
