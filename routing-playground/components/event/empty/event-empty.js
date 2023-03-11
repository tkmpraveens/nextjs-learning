import classes from "./event-empty.module.scss";

const EventEmpty = () => {
  return (
    <div className={classes["event-empty"]}>
      <div className={classes["event-empty__icon"]}></div>
      <div className={classes["event-empty__title"]}>No events available</div>
      <div className={classes["event-empty__desc"]}>
        We couldn't find any event now. Check out later
      </div>
    </div>
  );
};

export default EventEmpty;
