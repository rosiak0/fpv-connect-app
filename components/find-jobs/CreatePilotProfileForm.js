import { useRef } from "react";
import Card from "../ui/Card";

const CreatePilotProfileForm = (props) => {
  const nameInputRef = useRef();
  const surnameInputRef = useRef();
  const nicknameInputRef = useRef();
  const locationInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredSurname = surnameInputRef.current.value;
    const enteredNickname = nicknameInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;

    const pilotData = {
      name: enteredName,
      surname: enteredSurname,
      nickname: enteredNickname,
      location: enteredLocation,
    };

    props.onAddPilot(pilotData);
  };

  return (
    <Card>
      <form className="m-5" onSubmit={submitHandler}>
        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            required
            id="name"
            ref={nameInputRef}
          ></input>
        </div>
        <div>
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="surname"
          >
            Your Surname
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            required
            id="surname"
            ref={surnameInputRef}
          ></input>
        </div>
        <div>
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="nickname"
          >
            Your Nickname
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            required
            id="nickname"
            ref={nicknameInputRef}
          ></input>
        </div>
        <div>
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="location"
          >
            Where do you live?
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            required
            id="location"
            ref={locationInputRef}
          ></input>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">
            Add a pilot
          </button>
        </div>
      </form>
    </Card>
  );
};

export default CreatePilotProfileForm;
