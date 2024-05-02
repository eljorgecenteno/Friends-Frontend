import { useContext } from "react";
import "./EventDetails.css";
import Button from "@mui/material/Button";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";



function EventDetails({ meetup, getEvent }) {
  const { name, profile_image_url, interest, description, date, opinions, persons, city, _id } = meetup;

  const [newComent, setNewcoment] =useState(false)
  const [allOpinions, setAllOpinions] =useState([])
  const [comment, setComent] =useState("")
  const { eventId } = useParams();
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const deleteEvent = () => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}api/meetups/${eventId}`)
      .then(() => {
        navigate("/discover/events");
      })
      .catch((err) => console.log(err));
  };

  function joinEvent() {
    axios.put(`${import.meta.env.VITE_API_URL}/api/meetups/${eventId}/join`, { _id: user._id }).then((response) => {
      // navigate(`/persons/${user._id}`);
      alert(`Success, You are going to ${name}`);
      getEvent();
      console.log(response.data);
    });
  }

  function addOpinion(){
setNewcoment(true)
  }

  const handleSubmit = (e)=>{

    e.preventDefault();

    const commentObj = {description: comment, event: meetup._id, person: user._id}
   
    
    axios.post(`${import.meta.env.VITE_API_URL}/api/opinions`, commentObj)
    .then((res)=>{
     return  axios.get(`${import.meta.env.VITE_API_URL}/api/opinions`)
     
    })
    .then((allOpinions) => {
      setAllOpinions(allOpinions.data);
      
    })
    .catch((err)=>{
      console.log(err)
    })
    }


    useEffect(() => {
      axios.get(`${import.meta.env.VITE_API_URL}/api/opinions`).then((allOpinions) => {
        setAllOpinions(allOpinions.data);
        
      });
    }, []);


  return (
    <div id="container">
      <section id="event-details-container">
        <h1 id="header">
          <strong>{name}</strong>
        </h1>
        <div>
          <img src={profile_image_url} className="person-picture" />
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
          <br />
          
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
        {persons && <p>All Attending:</p>}
          <ol>
            {persons &&
              persons.map((person, index) => {
                return <li key={person._id}>{person.name}</li>;
              })}
          </ol>
        <div id="interests">
          <p>Opinions:</p>
          <p>
            {opinions.map((oneOpinion) => {
              return oneOpinion.description;
            })}
          </p>
          <button onClick={addOpinion}>Add Opinion</button>
        </div>
        
        {newComent && <form> <label className="each-input-sign-up-page">
          <textarea onChange={(e) => setComent(e.target.value)} id="description" placeholder="Write your comment here" name="description" rows="4" cols="50"></textarea>
        </label> <button onClick={handleSubmit}>Send comment</button></form>}
        <p>
  {allOpinions && allOpinions.map(eachOpinion => {
    console.log(eachOpinion)
    if (eachOpinion.event._id === eventId) {
      return <p key={eachOpinion.person._id}>{eachOpinion.person.name} : {eachOpinion.description}</p>
    } 
  })}
</p>
      </section>
    
    </div>
  );
}

export default EventDetails;
