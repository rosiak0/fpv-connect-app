import Link from "next/link";
import Button from "../ui/Button";
import Card from "../ui/Card";

const JobDetail = (props) => {
  return (
    <Card>
      <div className="flex justify-between p-10 text-2xl">
        <h1>{props.title}</h1>
        <h2>{props.company}</h2>
        <address>{props.location}</address>
      </div>
      <div className="px-10 pb-20 text-lg">
        <p>{props.description}</p>
      </div>
      <div className="flex justify-center">
        <Button>
          <div className="flex items-center">
            <a href={`mailto: ${props.email}`}>Send Email</a>
          </div>
        </Button>
        <Button>
          <button className="w-full">
            <Link href="/find-jobs">Return</Link>
          </button>
        </Button>
      </div>
    </Card>
  );
};

export default JobDetail;
