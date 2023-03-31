const Content = (props) => {
  return (
    <div className="m-auto w-full rounded-lg bg-navyblue px-10 pt-20 pb-20 text-lg text-yellow shadow-lg lg:w-3/5">
      {props.children}
    </div>
  );
};

export default Content;
