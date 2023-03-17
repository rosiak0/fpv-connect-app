const Card = (props) => {
  return (
    <div className="container-md m-auto w-96 pt-2 bg-white rounded-lg shadow-md">
      {props.children}
    </div>
  );
};

export default Card;
