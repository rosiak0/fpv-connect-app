const Content = (props) => {
  return (
    <div className="m-auto w-3/5 rounded-lg bg-navyblue px-10 pt-36 pb-20 text-lg text-yellow shadow-lg">
      {props.children}
    </div>
  );
};

export default Content;
