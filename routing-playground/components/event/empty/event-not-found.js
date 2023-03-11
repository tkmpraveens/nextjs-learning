import Image from "next/image";

import classes from "./event-empty.module.scss";

const EventNotFound = () => {
  return (
    <div
      className={`${classes["event-empty"]} ${classes["event-empty--not-found"]}`}
    >
      <div className={classes["event-empty__container"]}>
        <div className={classes["event-empty__icon"]}>
          <Image
            src="/images/event-empty.png"
            alt="Oops! No Events Match Your Filter"
            width={500}
            height={450}
          />
        </div>
        <h1 className={classes["event-empty__title"]}>
          Event you are looking for does not exist!
        </h1>
        <p className={classes["event-empty__desc"]}>
          Oops! The event you're looking for doesn't exist. Please check the URL
          and try again. If you think this is an error, contact our support team
          for help. Feel free to browse our website for other exciting events in
          the meantime.
        </p>
      </div>
    </div>
  );
};

export default EventNotFound;