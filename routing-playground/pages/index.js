import { useEffect, useState } from "react";
import Event from "../components/event/list/event";
import { getFeaturedEventList } from "./../data/event-list";

const HomePage = () => {
  const [eventList, setEventList] = useState();

  useEffect(() => {
    const eventList = getFeaturedEventList();
    setEventList(eventList);
  }, []);

  return (
    <div>
      <Event type="feature" title="Featured Events" eventList={eventList} />
    </div>
  );
};

export default HomePage;
