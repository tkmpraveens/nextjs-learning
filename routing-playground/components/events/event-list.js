import EventCard from "./event-card";
import classes from "./event.module.scss";

const EventList = (props) => {
  const { eventList } = props;

  const events = eventList.map((event, i) => {
    return <EventCard key={event?.id ?? i} event={event} />;
  });

  return <ul className={classes.event__list}>{events}</ul>;
};

export default EventList;
