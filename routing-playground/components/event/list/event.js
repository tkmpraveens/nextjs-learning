import classes from "./event.module.scss";

import EventSearch from "../search/event-search";
import EventList from "./event-list";

const Event = (props) => {
  const { type, title, eventList, year, month } = props;

  return (
    <main className={classes.event}>
      <div className={classes.event__header}>
        <h1 className={`title ${classes.event__heading}`}>
          {title ?? "Events"}
        </h1>

        <EventSearch type={type} year={year} month={month} />
      </div>

      {eventList && <EventList eventList={eventList} />}

      {eventList?.length === 0 && (
        <div className="event__empty">No events found!</div>
      )}
    </main>
  );
};

export default Event;
