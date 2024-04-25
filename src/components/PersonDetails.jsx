import React from "react";
import "./PersonDetails.css";

function PersonDetails({ person }) {
  const { name, age, profile_image_url, interest, motto, events, city } = person;

  return (
    <div id="container">
      <section id="person-details-container">
        <h1 id="header">
          <strong>{name}</strong>
        </h1>
        <div>
          <div>
            <img src={profile_image_url} className="person-picture" />
          </div>

          <div id="city">
            <p>City:</p>
            <p>{city}</p>
          </div>
          <div id="age">
            <p>Age:</p>
            <span>{age}</span>
          </div>
          <div id="interests">
            <p>Interests:</p>
            <p>{interest.join(", ")}</p>
          </div>
          <div id="motto">
            <p style={{ fontSize: "25px" }}>{motto}</p>
          </div>
          <div id="events">
            <p>Events:</p>
            <p>
              {events.map((oneMeetup) => {
                return oneMeetup.name;
              })}
            </p>
          </div>          
        </div>
      </section>
    </div>
  );
}

export default PersonDetails;
