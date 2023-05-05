import { useEffect, useState } from "react";

import classes from "./event-search.module.scss";

import { yearList } from "./yearList";
import { monthList } from "./monthList";

import Dropdown from "@/ui/dropdown/dropdown";
import { useRouter } from "next/router";

const EventSearch = (props) => {
  const router = useRouter();

  const [year, setYear] = useState();
  const [month, setMonth] = useState(undefined);

  const { type } = props;

  useEffect(() => {
    setYear(props.year?.option);
    setMonth(props.month?.option);
  }, [props.year, props.month]);

  useEffect(() => {
    initiateRedirection();
  }, [year, month]);

  const initiateRedirection = () => {
    if (year === "all" && month === "all") {
      if (type === "featured") router.push(`/`);
      else if (type === "filter" || type === "all") router.push(`/event`);
    } else if (year || month) {
      router.push(`/event/${year ?? "all"}/${month ?? "all"}`);
    }
  };

  return (
    <form className={classes.search}>
      <Dropdown
        id="year"
        label="Select Year"
        value={year}
        optionList={yearList}
        onChange={setYear}
      />

      <Dropdown
        id="month"
        label="Select Month"
        value={month}
        optionList={monthList}
        onChange={setMonth}
      />
    </form>
  );
};

export default EventSearch;
