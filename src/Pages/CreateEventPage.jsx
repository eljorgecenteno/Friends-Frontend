import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";

function CreateEventPage(props) {
  const [name, setName] = useState("");
  const [profile_image_url, setProfile_image_url] = useState("");
  const [interest, setInterest] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    axios
      .post(`${API_URL}/api/meetups`)
      .then((response) => {
        // Reset the state to clear the inputs
        setName("");
        setProfile_image_url("");
        setInterest("");
        setDescription("");
        setYear("");
        setMonth("");
        setDay("");
        setCity("");
        // Invoke the callback function coming through the props
        // from the ProjectDetailsPage, to refresh the project details
        props.refreshProject();
      })
      .catch((error) => console.log(error));
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, profile_image_url, interest, description, date: { $y: year, $m: month, $d: day }, city };

    axios.put(`${import.meta.env.VITE_API_URL}/api/meetups/${eventId}`, requestBody).then((response) => {
      navigate(`/events/${eventId}`);
    });
  };

  function setDate(e) {
    const splitDate = e.target.value.split("-");
    setYear(splitDate[0]);
    setMonth(splitDate[1]);
    setDay(splitDate[2]);
  }

  return (
    <div className="EditProjectPage">
      <h1>Create Event</h1>

      <form id="form-container" onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Profile Image Url:</label>
        <input type="text" name="profile_image_url" value={profile_image_url} onChange={(e) => setProfile_image_url(e.target.value)} />

        <label>Interest:</label>
        <input type="text" name="interest" value={interest} onChange={(e) => setInterest(e.target.value)} />

        <label>Description:</label>
        <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />

        <label>Date:</label>
        <input type="date" name="date" onChange={setDate} />

        <label>City:</label>
        <input type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} />

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}

export default CreateEventPage;
