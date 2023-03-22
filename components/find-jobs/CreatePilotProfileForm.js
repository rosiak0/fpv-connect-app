import { useRef } from "react";
import Card from "../ui/Card";

const CreatePilotProfileForm = (props) => {
  const nameInputRef = useRef();
  const surnameInputRef = useRef();
  const nicknameInputRef = useRef();
  const locationInputRef = useRef();
  const instagramInputRef = useRef();
  const youtubeInputRef = useRef();
  const emailInputRef = useRef();
  const videoInputRef = useRef();
  const photoInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredSurname = surnameInputRef.current.value;
    const enteredNickname = nicknameInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;
    const enteredInstagram = instagramInputRef.current.value;
    const enteredYoutube = youtubeInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredVideo = videoInputRef.current.value;
    const enteredPhoto = photoInputRef.current.value;

    const pilotData = {
      name: enteredName,
      surname: enteredSurname,
      nickname: enteredNickname,
      location: enteredLocation,
      instagram: enteredInstagram,
      youtube: enteredYoutube,
      email: enteredEmail,
      video: enteredVideo,
      photo: enteredPhoto,
    };

    props.onAddPilot(pilotData);
  };

  return (
    <Card>
      <form className="m-5" onSubmit={submitHandler}>
        <div>
          <label className="mb-2 block font-bold text-gray-700" htmlFor="name">
            Name:
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            type="text"
            required
            id="name"
            ref={nameInputRef}
          ></input>
        </div>
        <div>
          <label
            className="mb-2 block font-bold text-gray-700"
            htmlFor="surname"
          >
            Surname:
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            type="text"
            required
            id="surname"
            ref={surnameInputRef}
          ></input>
        </div>
        <div>
          <label
            className="mb-2 block font-bold text-gray-700"
            htmlFor="nickname"
          >
            Nickname:
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            type="text"
            required
            id="nickname"
            ref={nicknameInputRef}
          ></input>
        </div>
        <div>
          <label
            className="mb-2 block font-bold text-gray-700"
            htmlFor="location"
          >
            Location:
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            type="text"
            required
            id="location"
            ref={locationInputRef}
          ></input>
        </div>
        <div>
          <label className="mb-2 block font-bold text-gray-700" htmlFor="email">
            Enter your email address:
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            type="email"
            required
            id="email"
            ref={emailInputRef}
          ></input>
        </div>
        <div>
          <label
            className="mb-2 block font-bold text-gray-700"
            htmlFor="instagram"
          >
            Instagram profile:
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            type="url"
            required
            id="instagram"
            ref={instagramInputRef}
          ></input>
        </div>
        <div>
          <label
            className="mb-2 block font-bold text-gray-700"
            htmlFor="youtube"
          >
            Youtube channel:
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            type="url"
            required
            id="youtube"
            ref={youtubeInputRef}
          ></input>
        </div>
        <div>
          <label className="mb-2 block font-bold text-gray-700" htmlFor="video">
            Youtube video you want people to see
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            type="url"
            required
            id="video"
            ref={videoInputRef}
          ></input>
        </div>
        <div>
          <label className="mb-2 block font-bold text-gray-700" htmlFor="photo">
            Your photo
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            type="url"
            required
            id="photo"
            ref={photoInputRef}
          ></input>
        </div>
        <div>
          <button className="my-3 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
            Add a pilot
          </button>
        </div>
      </form>
    </Card>
  );
};

export default CreatePilotProfileForm;
