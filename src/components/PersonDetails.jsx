import React from "react";

function PersonDetails({ person }) {
  const { name, age, profile_image_url, interest, motto, events, city } = person;

  return (
    <div>
      <section className="flex flex-col items-center">
        <h2>PersonDetails</h2>
        <div style={{ width: "50vw" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={profile_image_url} />
          </div>

          <p>{name}</p>

          <div className="flex justify-between">
            <p>City:</p>
            <p>{city}</p>
          </div>
          <div className="flex">
            <p>Age</p>
            <span>{age}</span>
          </div>
          <div style={{ width: "50%" }} className="flex gap-60">
            <p>Interests:</p>
            <span>{interest}</span>
          </div>
          <p>{motto}</p>
        </div>
      </section>
    </div>
  );
}

export default PersonDetails;
