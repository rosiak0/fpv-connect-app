const PilotDetail = (props) => {
  return (
    <section className={classes.detail}>
      <h1>
        {props.name} +"{props.nickname}" + {props.surname}
      </h1>
      <address>{props.location}</address>
    </section>
  );
};

export default PilotDetail;
