import { useContext } from "react";
import "./EventDetails.css";
import Button from "@mui/material/Button";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

function EventDetails({ meetup }) {
  const { name, profile_image_url, interest, description, date, opinions, persons, city } = meetup;

  const { eventId } = useParams();
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const deleteEvent = () => {
    axios
      .delete(`${API_URL}/api/meetups/${eventId}`)
      .then(() => {
        navigate("/discover/events");
      })
      .catch((err) => console.log(err));
  };

  function joinEvent() {
    axios.put(`${API_URL}/api/meetups/${eventId}/join`, { _id: user._id }).then((response) => {
      navigate(`/persons/${user._id}`)
      console.log(response.data);
    });
  }

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
        <div id="buttons">
          <div id="button">
            <Button variant="contained" onClick={joinEvent}>
              Join
            </Button>
          </div>
          <div id="button">
            <Link to={`/events/edit/${eventId}`}>
              <Button variant="contained">Edit</Button>
            </Link>
          </div>
          <div id="button">
            <Button variant="contained" onClick={deleteEvent}>
              Delete
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventDetails;
