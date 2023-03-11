import Image from "next/image";

import classes from "./event-details.module.scss";

import { CalenderIcon } from "@/icons/calender";
import { LocationIcon } from "@/icons/location";
import { FeaturedIcon } from "@/icons/featured";

const EventDetails = (props) => {
  const { event } = props;

  return (
    <main className={classes["event-details"]}>
      <div className={classes["event-details__image"]}>
        <Image
          src={`/${event?.image}`}
          alt={event?.title}
          width={1600}
          height={300}
        />
      </div>
      <section className={classes["event-details__summary"]}>
        <div className={classes["event-details__summary-image"]}>
          <div className={classes["event-details__thumbnail"]}>
            <Image
              src={`/${event?.image}`}
              alt={event?.title}
              width={150}
              height={150}
            />
          </div>
          {event?.isFeatured && (
            <div className={classes["event-details__featured"]}>
              <FeaturedIcon />
            </div>
          )}
        </div>

        <h2 className={classes["event-details__title"]}>
          {event?.title ?? ""}
        </h2>

        <p className={classes["event-details__desc"]}>
          {event?.description ?? ""}
        </p>
        <span className={classes["event-details__meta"]}>
          <span className={`${classes["event-details__location"]} inline-icon`}>
            <LocationIcon />
            {event?.location ?? ""}
          </span>
          <span className={`${classes["event-details__date"]} inline-icon`}>
            <CalenderIcon />
            {event?.date ?? ""}
          </span>
        </span>
      </section>
    </main>
  );
};

export default EventDetails;
