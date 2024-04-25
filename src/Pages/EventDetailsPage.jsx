import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import eventsService from "../../services/events.service";
import EventDetails from "../components/EventDetails";

function EventDetailsPage() {
  const { eventId } = useParams();
  const [oneEvent, setOneEvent] = useState(null);

  const getEvent = () => {
    const token = localStorage.getItem("authToken");
    eventsService
      .getEvent(eventId)
      .then((response) => {
        const singleEvent = response.data;
        setOneEvent(singleEvent);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getEvent();
  }, []);

  if (oneEvent === null) {
    return (
      <div>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <EventDetails meetup={oneEvent}></EventDetails>
    </div>
  );
}

export default EventDetailsPage;
