const Button = (props) => {
  return (
    <div className="m-3 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
      {props.children}
    </div>
  );
};

export default Button;
