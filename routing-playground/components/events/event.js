import EventList from "./event-list";

const Event = (props) => {
  const { eventList, title } = props;

  return (
    <main className="event">
      <h1 className="title">{title ?? "Events"}</h1>

      {eventList && <EventList eventList={eventList} />}

      {eventList?.length === 0 && (
        <div className="event__empty">No events found!</div>
      )}
    </main>
  );
};

export default Event;
