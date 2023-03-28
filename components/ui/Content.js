const Content = (props) => {
  return (
    <div className="m-auto w-3/5 rounded-lg bg-navyblue py-36 px-10 text-lg text-yellow shadow-lg">
      {props.children}
    </div>
  );
};

export default Content;
