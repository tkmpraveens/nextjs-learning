import classes from "./event.module.scss";

const EventCard = (props) => {
  const { event } = props;

  return (
    <li className={classes.event__card}>
      <img
        className={classes.event__image}
        src={event.image}
        alt={event.title}
      />
      <div className={classes.event__content}>
        <h2 className={classes.event__title}>{event.title ?? ""}</h2>
        <p className={classes.event__desc}>{event.description ?? ""}</p>
        <span className={classes.event__location}>{event.location ?? ""}</span>
        <span className={classes.event__date}>{event.date ?? ""}</span>
      </div>
    </li>
  );
};

export default EventCard;
