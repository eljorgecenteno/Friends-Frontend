import React from "react";

function PersonDetails({ person }) {
  const { name, age, profile_image_url, interest, motto, events, city } = person;

  return (
    <div>
      <h2>PersonDetails</h2>
      <img src={profile_image_url} />
      <div>
        <p>{name}</p>
      </div>
      <div>
        <p>City</p>
        <span>{city}</span>
        <p>Age</p>
        <span>{age}</span>
        <p>Interests:</p>
        <span>{interest}</span>
        <p>{motto}</p>
      </div>
    </div>
  );
}

export default PersonDetails;
