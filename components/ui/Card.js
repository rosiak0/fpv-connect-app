const Card = (props) => {
  return (
    <div className="mx-auto mt-10 w-3/5 overflow-hidden rounded-lg bg-navyblue text-yellow shadow-md">
      {props.children}
    </div>
  );
};

export default Card;
