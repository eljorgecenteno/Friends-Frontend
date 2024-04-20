import React from "react";
import "./EventDetails.css";

function EventDetails({ meetup }) {
  const { name, profile_image_url, interest, description, date, opinions, persons, city } = meetup;

  return (
    <div id="container">
      <section id="event-details-container">
        <h1 id="header">
          <strong>{name}</strong>
        </h1>
        <div>
          <img src={profile_image_url} className="person-picture" />
        </div>
        <div id="city">
          <p>City:</p>
          <p>{city}</p>
        </div>
        <div id="city">
          <p>Date:</p>
          <p>{`${date.$d}-${date.$m}-${date.$y}`}</p>
        </div>
        <div id="interests">
          <p>Interest:</p>
          <p>{interest}</p>
        </div>
        <div id="interests">
          <p>Opinion:</p>
          <p>
            {opinions.map((oneOpinion) => {
              return oneOpinion.description;
            })}
          </p>
        </div>
      </section>
    </div>
  );
}

export default EventDetails;
