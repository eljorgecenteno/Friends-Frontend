import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function EditEventPage() {
  const [name, setName] = useState("");
  const [profile_image_url, setProfile_image_url] = useState("");
  const [interest, setInterest] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState({
    $y: 2024,
    $m: 1,
    $d: 20,
  });
  const [city, setCity] = useState("");

  const { eventId } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${API_URL}/api/meetups/${eventId}`)
      .then((response) => {
        const oneEvent = response.data;
        setName(oneEvent.name);
        setProfile_image_url(oneEvent.profile_image_url);
        setInterest(oneEvent.interest);
        setDescription(oneEvent.description);
        setDate(oneEvent.date);
      })
      .catch((error) => console.log(error));
  }, [eventId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, profile_image_url, interest, description, date };

    axios
      .put(`${API_URL}/api/meetups/${eventId}`, requestBody)
      .then((response) => {
        navigate(`/projects/${projectId}`)
      });
  };

  return (
    <div className="EditProjectPage">
      <h3>Edit-Event</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Profile Image Url:</label>
        <input type="image" name="profile_image_url" src={profile_image_url} onChange={(e) => setProfile_image_url(e.target.value)} />

        <label>Interest:</label>
        <input type="text" name="interest" value={interest} onChange={(e) => setName(e.target.value)} />

        <label>Description:</label>
        <input type="text" name="description" value={description} onChange={(e) => setName(e.target.value)} />

        <label>Date:</label>
        <input type="date" name="date" value={date} onChange={(e) => setName(e.target.value)} />

        <label>City:</label>
        <input type="text" name="city" value={city} onChange={(e) => setName(e.target.value)} />

        <button type="submit">Update Event</button>
      </form>

      <button onClick={deleteProject}>Delete Project</button>
    </div>
  );
}

export default EditEventPage;
