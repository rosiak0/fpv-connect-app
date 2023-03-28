import Link from "next/link";
import Button from "../ui/Button";
import Card from "../ui/Card";

const PilotDetail = (props) => {
  return (
    <Card>
      <div className="flex">
        <iframe
          className="aspect-video"
          width="1080px"
          height="auto"
          src={props.video.replace("/watch?v=", "/embed/")}
          title="YouTube video player"
          frameborder="0"
          allowfullscreen="true"
        ></iframe>
        <div className="mx-auto flex flex-col items-center justify-between">
          <div className=" mb-6 mt-3 text-center">
            <h1>{`${props.name} "${props.nickname}" ${props.surname}`}</h1>
            <address>{props.location}</address>
          </div>
          <div className="text-center">
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
            <div className="text-center">
              <a
                href={`mailto: ${props.email}`}
                className="mx-2 hover:scale-105 hover:shadow-xl"
              >
                Send Email
              </a>
            </div>
          </div>
          <Button>
            <button className="w-full">
              <Link href="/find-pilots">Return</Link>
            </button>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PilotDetail;
