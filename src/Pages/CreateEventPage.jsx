import React from "react";
import axios from "axios";
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";

function CreateEventPage() {
  const [name, setName] = useState("");
  const [profile_image_url, setProfile_image_url] = useState("");
  const [interest, setInterest] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [city, setCity] = useState("");


  axios
  .post(`${API_URL}/api/meetups`, requestBody)
  .then((response) => {
    // Reset the state to clear the inputs
    setName("");
    setProfile_image_url("");
    setInterest("")
    setDescription("")
    setYear("")
    setMonth("")
    setDay("")
    setCity("")  
    // Invoke the callback function coming through the props
    // from the ProjectDetailsPage, to refresh the project details
    props.refreshProject();
  })
  .catch((error) => console.log(error));
};




  return <div>CreateEventPage</div>;
}

export default CreateEventPage;
