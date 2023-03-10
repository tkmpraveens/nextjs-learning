import { useEffect, useState } from "react";
import Event from "@/components/event/list/event";
import { getEventList } from "@/data/event-list";

const FilteredEventListPage = () => {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    const eventList = getEventList();
    setEventList(eventList);
  }, []);

  return (
    <div>
      <Event title="Filtered event list page" eventList={eventList} />
    </div>
  );
};

export default FilteredEventListPage;
