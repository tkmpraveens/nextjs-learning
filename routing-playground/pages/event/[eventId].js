import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getEventById } from "@/data/event-list";
import EventDetails from "./../../components/event/event-details";

const EventDetailsPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState(null);
  const eventId = router.query?.eventId;

  useEffect(() => {
    const event = getEventById(eventId);
    setEvent(event);
    setLoading(false);
  }, [eventId]);

  if (loading) {
    return <p>Loading</p>;
  }

  if (!event && !loading) {
    return <p>Error</p>;
  }

  return <EventDetails event={event} />;
};

export default EventDetailsPage;
