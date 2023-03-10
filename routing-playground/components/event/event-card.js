import Link from "next/link";

import classes from "./event.module.scss";

import { CalenderIcon } from "@/icons/calender";
import { FavoriteIcon } from "@/icons/favorite";
import { LocationIcon } from "@/icons/location";

import Button from "@/ui/button";

const EventCard = (props) => {
  const { event } = props;
  const link = event?.id ? `/event/${event.id}` : null;

  return (
    <li className={classes.event__card}>
      <div className={classes.event__favorite}>
        <Button>
          <FavoriteIcon />
        </Button>
      </div>

      <Link href={link}>
        <div className={classes.event__image}>
          <img src={event.image} alt={event.title} />
        </div>

        <div className={classes.event__content}>
          <h2 className={classes.event__title}>{event.title ?? ""}</h2>

          <p className={classes.event__desc}>{event.description ?? ""}</p>
          <span className={`${classes.event__location} inline-icon`}>
            <LocationIcon />
            {event.location ?? ""}
          </span>
          <span className={`${classes.event__date} inline-icon`}>
            <CalenderIcon />
            {event.date ?? ""}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default EventCard;
