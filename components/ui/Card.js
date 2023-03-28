const Card = (props) => {
  return (
    <div className="mx-auto mt-10 max-w-screen-md overflow-hidden rounded-lg bg-mainbg text-yellow ">
      {props.children}
    </div>
  );
};

export default Card;
