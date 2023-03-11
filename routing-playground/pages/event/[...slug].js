import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getFilteredEventList } from "@/data/event-list";
import { getYearDetails } from "@/components/event/search/yearList";
import { getMonthDetails } from "@/components/event/search/monthList";

import Event from "@/components/event/list/event";

const FilteredEventListPage = () => {
  const [eventList, setEventList] = useState([]);
  const router = useRouter();

  const slug = router?.query?.slug ?? undefined;
  const yearParam = slug?.[0] ?? "all";
  const monthParam = slug?.[1] ?? "all";

  const year = getYearDetails(yearParam);
  const month = getMonthDetails(monthParam);

  useEffect(() => {
    const eventList = getFilteredEventList(yearParam, monthParam);
    setEventList(eventList);
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
        year={yearParam}
        month={monthParam}
        eventList={eventList}
      />
    </div>
  );
};

export default FilteredEventListPage;
