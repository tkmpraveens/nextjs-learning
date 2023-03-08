const EventCard = (props) => {
  const { event } = props;

  return (
    <li className="event__card">
      <img className="event__image" src={event.image} alt={event.title} />
      <h2 className="event__title">{event.title ?? ""}</h2>
      <p className="event__desc">{event.description ?? ""}</p>
      <span className="event__location">{event.location ?? ""}</span>
      <span className="event__date">{event.date ?? ""}</span>
    </li>
  );
};

export default EventCard;
