const ListCard = (props) => {
  return (
    <div className="overflow-hidden rounded-xl bg-mainbg pt-10 shadow-md duration-200 hover:scale-105 hover:shadow-xl">
      {props.children}
    </div>
  );
};

export default ListCard;
