const ListButton = (props) => {
  return (
    <div className="mt-10 flex h-16 w-full justify-center rounded-b bg-highlight bg-opacity-30 py-2 px-4 font-bold hover:scale-105 hover:bg-highlight hover:bg-opacity-80 hover:shadow-xl">
      {props.children}
    </div>
  );
};

export default ListButton;
