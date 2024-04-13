import React from "react";
import "./PersonDetails.css";

function PersonDetails({ person }) {
  const { name, age, profile_image_url, interest, motto, events, city } = person;

  return (
    <div id="container">
      <section id="person-details-container">
        <h2>PersonDetails</h2>
        <div>
          <div>
            <img src={profile_image_url} className="person-picture" />
          </div>

          <div id="name">
            <p>Name:</p>
            <p>{name}</p>
          </div>

          <div id="city">
            <p>City:</p>
            <p>{city}</p>
          </div>
          <div id="age">
            <p>Age</p>
            <span>{age}</span>
          </div>
          <div id="interests">
            <p>Interests:</p>
            <p>{interest}</p>
          </div>
          <p>{motto}</p>
        </div>
      </section>
    </div>
  );
}

export default PersonDetails;
