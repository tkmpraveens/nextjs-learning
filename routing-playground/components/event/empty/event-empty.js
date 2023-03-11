import classes from "./event-empty.module.scss";

import { getMonthDetails } from "../search/monthList";
import { getYearDetails } from "../search/yearList";

const EventEmpty = (props) => {
  const { year, month } = props;

  const yearDetails = getYearDetails(year);
  const monthDetails = getMonthDetails(month);

  const title =
    year || month
      ? `Oops! No Events Match for 
      ${monthDetails?.option !== "all" ? monthDetails?.label : ""} 
      ${yearDetails?.option !== "all" ? yearDetails?.label : ""} `
      : "Oops! No Events Match Your Filter";

  return (
    <div className={classes["event-empty"]}>
      <div className={classes["event-empty__icon"]}>
        <img
          src="/images/event-empty.png"
          alt="Oops! No Events Match Your Filter"
        />
      </div>
      <h1 className={classes["event-empty__title"]}>{title}</h1>
      <p className={classes["event-empty__desc"]}>
        We couldn't find any events that match your search criteria. Don't
        worry, we won't give up on you just yet! Please try broadening your
        search parameters or trying a different filter to help us better
        understand your event interests.
        <br />
        Thank you for using our website and happy event searching!
      </p>
    </div>
  );
};

export default EventEmpty;
