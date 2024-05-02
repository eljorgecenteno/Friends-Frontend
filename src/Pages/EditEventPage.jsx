import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./EditEventPage.css";

const API_URL = "http://localhost:5005";

function EditEventPage() {
  const [name, setName] = useState("");
  const [profile_image_url, setProfile_image_url] = useState("");
  const [interest, setInterest] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [city, setCity] = useState("");

  const { eventId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/meetups/${eventId}`)
      .then((response) => {
        const oneEvent = response.data;
        setName(oneEvent.name);
        setProfile_image_url(oneEvent.profile_image_url);
        setInterest(oneEvent.interest);
        setDescription(oneEvent.description);
        setYear(oneEvent.year);
        setMonth(oneEvent.month);
        setDay(oneEvent.day);
        setCity(oneEvent.city);
      })
      .catch((error) => console.log(error));
  }, [eventId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, profile_image_url, interest, description, date: { $y: year, $m: month, $d: day }, city };

    /*axios.put(`${API_URL}/api/meetups/${eventId}`, requestBody).then((response) => {
      navigate(`/events/${eventId}`);
    });*/
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
      <h1>Edit Event</h1>

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

        <button type="submit">Update Event</button>
      </form>
    </div>
  );
}

export default EditEventPage;
