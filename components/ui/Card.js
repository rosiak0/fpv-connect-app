const Card = (props) => {
  return (
    <div className="mx-auto mt-10 max-w-screen-md overflow-hidden rounded-lg bg-navyblue text-yellow shadow-lg">
      {props.children}
    </div>
  );
};

export default Card;
