import { useRef } from "react";
import Card from "../ui/Card";

const PostJobsForm = (props) => {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const locationInputRef = useRef();
  const companyInputRef = useRef();
  const emailInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;
    const enteredCompany = companyInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    const jobData = {
      title: enteredTitle,
      description: enteredDescription,
      location: enteredLocation,
      company: enteredCompany,
      email: enteredEmail,
    };

    props.onAddJob(jobData);
  };

  return (
    <Card>
      <form className="m-5" onSubmit={submitHandler}>
        <div>
          <label className="mb-2 block font-bold text-gray-700" htmlFor="title">
            Title
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            type="text"
            required
            id="title"
            ref={titleInputRef}
          ></input>
        </div>
        <div>
          <label
            className="mb-2 block font-bold text-gray-700"
            htmlFor="company"
          >
            Company
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            type="text"
            required
            id="company"
            ref={companyInputRef}
          ></input>
        </div>
        <div>
          {/* Add a map! */}
          <label
            className="mb-2 block font-bold text-gray-700"
            htmlFor="location"
          >
            Location
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight 
            text-gray-700 shadow focus:outline-none"
            type="text"
            required
            id="location"
            ref={locationInputRef}
          ></input>
        </div>
        <div>
          <label
            className="mb-2 block font-bold text-gray-700"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            type="text"
            defaultValue="Describe the task"
            required
            id="description"
            ref={descriptionInputRef}
          ></textarea>
        </div>

        <div>
          <label className="mb-2 block font-bold text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight 
            text-gray-700 shadow focus:outline-none"
            type="email"
            required
            id="email"
            ref={emailInputRef}
          ></input>
        </div>
        <div>
          <button className="my-3 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
            Post a job
          </button>
        </div>
      </form>
    </Card>
  );
};

export default PostJobsForm;
