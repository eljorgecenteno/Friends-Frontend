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
  const [error, setError] = useState("");
  const [city, setCity] = useState("");  
  const [imageUrl, setImageUrl] = useState("https://www.shutterstock.com/image-vector/upcoming-events-isolated-on-white-260nw-1538520572.jpg")

  const { eventId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/meetups/${eventId}`)
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
  
  const handleFileUpload = (e) => {
    console.log("The file to be uploaded is: ", e.target.files[0]);
    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("imageUrl", e.target.files[0]);
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/upload`, uploadData)
      .then((response) => {
        console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        //setImageUrl(response.data.fileUrl);
        console.log(response.data.fileUrl);
        setImageUrl(response.data.fileUrl);
      })
      .catch((err) => setError(err.response.data.message));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, profile_image_url: imageUrl, interest, description, date: { $y: year, $m: month, $d: day }, city };

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
        
        <label className="each-input-sign-up-page">
          
          <input
            onChange={(e) => {
              handleFileUpload(e);
            }}
            type="file"
            placeholder="Choose file"
          />
        </label>
        <label>Thema:</label>
        <select name="cityselected" defaultValue="" className="each-input-sign-up-page" onChange={(e) => setInterest(e.target.value)}>
          <option value={interest} disabled hidden>
            {interest}
          </option>
          <option value="Chess">Chess</option>
          <option value="Cinema">Cinema</option>
          <option value="Poker">Poker</option>
          <option value="Theather">Theather</option>
          <option value="Party">Party</option>
          <option value="Restaurants">Restaurants</option>
          <option value="Hiking">Hiking</option>
          <option value="Football">Football</option>
          <option value="Movie Night">Movie Night</option>
          <option value="Running">Running</option>
          <option value="Language exchange">Language exchange</option>
          <option value="Trips">Trips</option>
          <option value="Basketball">Basketball</option>
        </select>

        
        <label>Description:</label>
        <label className="each-input-sign-up-page">
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} id="description" placeholder="Write a description about the event" name="description" rows="4" cols="50"></textarea>
        </label>
        <label>Date:</label>
        <input type="date" name="date" onChange={setDate} />
        <label>City:</label>
        <select name="cityselected" defaultValue="" className="each-input-sign-up-page" onChange={(e) => setCity(e.target.value)}>
          <option value={city} disabled hidden>
            {city}
          </option>
          <option value="London">London</option>
          <option value="Paris">Paris</option>
          <option value="Madrid">Madrid</option>
          <option value="Berlin">Berlin</option>
          <option value="Athens">Athens</option>
        </select>

        <button type="submit">Update Event</button>
      </form>
      <div>{error && <h2>Error: {error}</h2> }</div>
    </div>
  );
}

export default EditEventPage;
