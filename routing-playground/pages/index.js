import { useEffect, useState } from "react";
import Event from "../components/event/event";
import { getEventList } from "./../data/event-list";

const HomePage = () => {
  const [eventList, setEventList] = useState();

  useEffect(() => {
    const eventList = getEventList();
    setEventList(eventList);
  }, []);

  return (
    <div>
      <Event title="Featured events" eventList={eventList} />
    </div>
  );
};

export default HomePage;
