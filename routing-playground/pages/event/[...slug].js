import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getFilteredEventList } from "@/data/event-list";

import Event from "@/components/event/list/event";

const FilteredEventListPage = () => {
  const [eventList, setEventList] = useState([]);
  const router = useRouter();

  const year = router?.query?.year;
  const month = router?.query?.month;

  useEffect(() => {
    const eventList = getFilteredEventList({ year, month });
    setEventList(eventList);
  }, []);

  return (
    <div>
      <Event title="Filtered event list page" eventList={eventList} />
    </div>
  );
};

export default FilteredEventListPage;
