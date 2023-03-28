const Button = (props) => {
  return (
    <div className="m-3 flex h-16 w-64 justify-center rounded bg-highlight bg-opacity-30 py-2 px-4 font-bold hover:scale-105 hover:bg-highlight hover:bg-opacity-80 hover:shadow-xl">
      {props.children}
    </div>
  );
};

export default Button;
