import { useEffect, useState } from "react";
import Event from "../components/event/event";
import { getFeaturedEventList } from "./../data/event-list";

const HomePage = () => {
  const [eventList, setEventList] = useState();

  useEffect(() => {
    const eventList = getFeaturedEventList();
    setEventList(eventList);
  }, []);

  return (
    <div>
      <Event title="Featured events" eventList={eventList} />
    </div>
  );
};

export default HomePage;
