import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getEventById } from "@/data/event-list";
import EventDetails from "./../../components/event/event-details";

const EventDetailsPage = () => {
  const router = useRouter();
  const [event, setEvent] = useState(null);
  const eventId = router.query?.eventId;

  useEffect(() => {
    const event = getEventById(eventId);
    setEvent(event);
  }, [eventId]);

  if (!event) {
    return <p>Error</p>;
  }

  return <EventDetails event={event} />;
};

export default EventDetailsPage;
