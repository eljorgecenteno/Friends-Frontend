import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./CreateEventPage.css"

const API_URL = "http://localhost:5005";

function CreateEventPage(props) {
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
  const navigate = useNavigate();

  /*useEffect(() => {
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
        props.createEvents();
      })
      .catch((error) => console.log(error));
  }); we do not want that we have empty fields when the page renders in the beginning but we want we are 
  clicking on habdleformsubmit*/
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
      .catch((err) => console.log("Error while uploading the file: ", err));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, profile_image_url: imageUrl, interest, description, date: { $y: year, $m: month, $d: day }, city };

    axios.post(`${import.meta.env.VITE_API_URL}/api/meetups/`, requestBody)
    .then((response) => {
      console.log("created the event", response.data);
      navigate(`/discover/events`);
    })
    .catch((err)=>{
      console.log(err.response.data.message);
      setError(err.response.data.message);
    })
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
       
        <label className="each-input-sign-up-page">
          Profile image
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
          <option value="" disabled hidden>
            Choose Thema of the event
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
        <textarea onChange={(e) => setDescription(e.target.value)} id="description" placeholder="Write a description about the event" name="description" rows="4" cols="50"></textarea>
        </label>
        <label>Date:</label>
        <input type="date" name="date" onChange={setDate} />

        <label>City:</label>
        <select name="cityselected" defaultValue="" className="each-input-sign-up-page" onChange={(e) => setCity(e.target.value)}>
          <option value="" disabled hidden>
            Choose your city
          </option>
          <option value="London">London</option>
          <option value="Paris">Paris</option>
          <option value="Madrid">Madrid</option>
          <option value="Berlin">Berlin</option>
          <option value="Athens">Athens</option>
        </select>
        <div className="button">
          <Button type="submit" variant="contained" style={{ backgroundColor: "#21b6ae" }}>
            Create Event
          </Button>
        </div>
      </form>
      {error && <h2>Error: {error}</h2>}
    </div>
  );
}

export default CreateEventPage;
