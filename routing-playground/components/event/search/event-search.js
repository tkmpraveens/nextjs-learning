import { useEffect, useState } from "react";

import classes from "./event-search.module.scss";

import { yearList } from "./yearList";
import { monthList } from "./monthList";

import Dropdown from "@/ui/dropdown/dropdown";
import { useRouter } from "next/router";

const EventSearch = (props) => {
  const router = useRouter();
  const { type } = props;

  const [year, setYear] = useState(props.year ?? "all");
  const [month, setMonth] = useState(props.month ?? "all");

  useEffect(() => {
    if (year && month) {
      if (year !== "all" || month !== "all") {
        router.push(`/event/${year}/${month}`);
      } else if (year === "all" && month === "all") {
        if (type === "featured") router.push(`/`);
        else if (type === "filter" || type === "all") router.push(`/event`);
      }
    }
  }, [year, month]);

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
