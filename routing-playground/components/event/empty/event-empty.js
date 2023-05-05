import Image from "next/image";

import classes from "./event-empty.module.scss";

import { imageLoader } from "@/utils";

const EventEmpty = (props) => {
  const { year, month } = props;

  const title =
    year || month
      ? `Oops! No events match for 
      ${month?.option !== "all" ? month?.label : ""} 
      ${year?.option !== "all" ? year?.label : ""} `
      : "Oops! No events match your filter";

  return (
    <div className={classes["event-empty"]}>
      <div className={classes["event-empty__container"]}>
        <div className={classes["event-empty__icon"]}>
          <Image
            loader={imageLoader}
            src="images/event-empty.png"
            alt="Oops! No events match your filter"
            width={500}
            height={450}
          />
        </div>
        <h1 className={classes["event-empty__title"]}>{title}</h1>
        <p className={classes["event-empty__desc"]}>
          We couldn&apos;t find any events that match your search criteria.
          Don&apos;t worry, we won&apos;t give up on you just yet! Please try
          broadening your search parameters or trying a different filter to help
          us better understand your event interests.
          <br />
          Thank you for using our website and happy event searching!
        </p>
      </div>
    </div>
  );
};

export default EventEmpty;
