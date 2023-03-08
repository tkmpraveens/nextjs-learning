import EventCard from "./event-card";

const EventList = (props) => {
  const { eventList } = props;

  const events = eventList.map((event, i) => {
    return <EventCard key={event?.id ?? i} event={event} />;
  });

  return <ul>{events}</ul>;
};

export default EventList;
