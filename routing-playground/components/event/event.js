import EventList from "./event-list";
import classes from "./event.module.scss";

const Event = (props) => {
  const { eventList, title } = props;

  return (
    <main className={classes.event}>
      <h1 className={`title ${classes.event__header}`}>{title ?? "Events"}</h1>

      {eventList && <EventList eventList={eventList} />}

      {eventList?.length === 0 && (
        <div className="event__empty">No events found!</div>
      )}
    </main>
  );
};

export default Event;
