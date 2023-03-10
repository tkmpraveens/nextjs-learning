import { useEffect, useState } from "react";

import { getEventList } from "@/data/event-list";
import Event from "@/components/event/list/event";

const EventListPage = () => {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    const eventList = getEventList();
    setEventList(eventList);
  }, []);

  return (
    <div>
      <Event type="all" title="All Events" eventList={eventList} />
    </div>
  );
};

export default EventListPage;
