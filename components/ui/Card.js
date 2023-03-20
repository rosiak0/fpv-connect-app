const Card = (props) => {
  return (
    <div className="max-w-sm m-auto overflow-hidden rounded-xl bg-white shadow-md ">
      {props.children}
    </div>
  );
};

export default Card;
