const ButtonLarge = (props) => {
  return (
    <div className="m-3 flex h-20 w-56 justify-center rounded bg-highlight bg-opacity-30 py-2 px-4 font-bold hover:scale-105 hover:bg-highlight hover:bg-opacity-80 hover:shadow-xl lg:w-80">
      {props.children}
    </div>
  );
};

export default ButtonLarge;
