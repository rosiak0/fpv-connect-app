import { useRef } from "react";
import Card from "../ui/Card";

const PostJobsForm = (props) => {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const locationInputRef = useRef();
  const companyInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;
    const enteredCompany = companyInputRef.current.value;

    const jobData = {
      title: enteredTitle,
      description: enteredDescription,
      location: enteredLocation,
      company: enteredCompany,
    };

    props.onAddJob(jobData);
  };

  return (
    <Card>
      <form className="m-5" onSubmit={submitHandler}>
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            required
            id="title"
            ref={titleInputRef}
          ></input>
        </div>
        <div>
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="company"
          >
            Company
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            required
            id="company"
            ref={companyInputRef}
          ></input>
        </div>
        <div>
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            defaultValue="Describe the task"
            required
            id="description"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div>
          {/* Add a map! */}
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
            leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            required
            id="location"
            ref={locationInputRef}
          ></input>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">
            Post a job
          </button>
        </div>
      </form>
    </Card>
  );
};

export default PostJobsForm;
