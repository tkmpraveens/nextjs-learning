import { useEffect, useState } from "react";

import classes from "./event-search.module.scss";

import { yearList } from "./yearList";
import { monthList } from "./monthList";

import Dropdown from "@/ui/dropdown/dropdown";
import { useRouter } from "next/router";

const EventSearch = () => {
  const [year, setYear] = useState("all");
  const [month, setMonth] = useState("all");

  const router = useRouter();

  useEffect(() => {
    if ((year && year !== "all") || (month && month !== "all")) {
      router.push(`/event/${year}/${month}`);
    }
  }, [year, month]);

  return (
    <form className={classes.search}>
      <Dropdown
        id="year"
        label="Select Year"
        optionList={yearList}
        onChange={setMonth}
      />

      <Dropdown
        id="month"
        label="Select Month"
        optionList={monthList}
        onChange={setYear}
      />
    </form>
  );
};

export default EventSearch;
