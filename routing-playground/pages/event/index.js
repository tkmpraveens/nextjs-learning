import { useEffect, useState } from "react";

import { getEventList } from "@/data/event-list";
import Event from "@/components/event/event";

const EventListPage = () => {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    const eventList = getEventList();
    setEventList(eventList);
  }, []);

  return (
    <div>
      <Event title="All Events" eventList={eventList} />
    </div>
  );
};

export default EventListPage;
