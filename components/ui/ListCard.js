const ListCard = (props) => {
  return (
    <div className="max-w-sm m-auto overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
      {props.children}
    </div>
  );
};

export default ListCard;
