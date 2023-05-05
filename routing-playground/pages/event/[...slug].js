import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getFilteredEventList } from "@/data/event-list";
import { getYearDetails } from "@/components/event/search/yearList";
import { getMonthDetails } from "@/components/event/search/monthList";

import Event from "@/components/event/list/event";

const FilteredEventListPage = () => {
  const [eventList, setEventList] = useState([]);

  const [yearParam, setYearParam] = useState(undefined);
  const [monthParam, setMonthParam] = useState(undefined);

  const [year, setYear] = useState(undefined);
  const [month, setMonth] = useState(undefined);

  const router = useRouter();
  const slug = router?.query?.slug ?? undefined;

  useEffect(() => {
    setYearParam(slug?.[0]);
    setMonthParam(slug?.[1]);
  }, [slug]);

  useEffect(() => {
    if (yearParam && monthParam) {
      const year = getYearDetails(yearParam);
      const month = getMonthDetails(monthParam);

      setYear(year);
      setMonth(month);

      const eventList = getFilteredEventList(yearParam, monthParam);
      setEventList(eventList);
    }
  }, [yearParam, monthParam]);

  const eventTitle =
    year || month
      ? `All Events during 
      ${month?.option !== "all" ? month?.label : ""} 
      ${year?.option !== "all" ? year?.label : ""} `
      : "All Events";

  return (
    <div>
      <Event
        type="filter"
        title={eventTitle}
        year={year}
        month={month}
        eventList={eventList}
      />
    </div>
  );
};

export default FilteredEventListPage;
