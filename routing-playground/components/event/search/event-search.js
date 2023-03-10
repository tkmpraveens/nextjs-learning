import { useEffect, useState } from "react";

import classes from "./event-search.module.scss";

import { yearList } from "./yearList";
import { monthList } from "./monthList";

import Dropdown from "@/ui/dropdown/dropdown";
import { useRouter } from "next/router";

const EventSearch = () => {
  const router = useRouter();

  const slug = router?.query?.slug ?? undefined;
  const defaultYear = slug?.[0] ?? "all";
  const defaultMonth = slug?.[1] ?? "all";

  const [year, setYear] = useState(defaultYear);
  const [month, setMonth] = useState(defaultMonth);

  useEffect(() => {
    console.log(slug, year, month);
    if (year && month) {
      if (year !== "all" || month !== "all") {
        router.push(`/event/${year}/${month}`);
      } else if (year === "all" && month === "all" && slug) {
        router.push(`/event`);
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
