import { useContext } from "react";
import "./EventDetails.css";
import Button from "@mui/material/Button";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";

function EventDetails({ meetup, getEvent }) {
  const { name, profile_image_url, interest, description, date, opinions, persons, city, _id } = meetup;

  const [newComent, setNewcoment] = useState(false);
  const [allOpinions, setAllOpinions] = useState([]);
  const [comment, setComent] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const { eventId } = useParams();
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const deleteEvent = () => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/api/meetups/${eventId}`)
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

  function addOpinion() {
    setNewcoment(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const commentObj = { description: comment, event: meetup._id, person: user._id };

    axios
      .post(`${import.meta.env.VITE_API_URL}/api/opinions`, commentObj)
      .then((res) => {
        return axios.get(`${import.meta.env.VITE_API_URL}/api/opinions`);
      })
      .then((allOpinions) => {
        setAllOpinions(allOpinions.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/persons/${user._id}`).then((currentUser) => {
      setCurrentUser(currentUser.data);
      console.log(currentUser.data);
    });
  }, []);

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
          {currentUser.isAdmin && (
            <div className="admin-buttons">
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
          )}
          <br />
        </div>
        <div id="city">
          <p>City:</p>
          <p>{city}</p>
        </div>
        <div id="interests">
          <p>Date:</p>
          <p>{`${date.$d}-${date.$m}-${date.$y}`}</p>
        </div>
        <div id="interests">
          <p>Interest:</p>
          <p>{interest}</p>
        </div>
        <div id="interests">
          <p>Description:</p>
          <p>{description}</p>
        </div>
        {persons && <p id="all-attending">All Attending:</p>}
        <ol>
          {persons &&
            persons.map((person, index) => {
              return (
         
                 <Link style={{ textDecoration: 'none', color: 'black' }}to={`/persons/${person._id}`}><p id="each-attending-person" >{person.name}</p></Link> 
                
              );
            })}
        </ol>
        <div id="opinions"><div >
          <p className="opinion-text">Opinions:</p>
          <p>
            {opinions.map((oneOpinion) => {
              return <div className="opinion">oneOpinion.description</div>
            })}
          </p>          
          <button onClick={addOpinion} className="button-8">Add Opinion</button>
        </div>

        {newComent && (
          <form>
            {" "}
            <label className="each-input-event-details-page">
              <textarea id="comment-text-area"onChange={(e) => setComent(e.target.value)} style={{ width: "1000px", height: "80px" }}id="description" placeholder="Write your comment here" name="description" rows="4" cols="50"></textarea>
            </label>{" "}
            <button id="send-comment-buttom"onClick={handleSubmit}>Send comment</button>
          </form>
        )}
        <p>
          {allOpinions &&
            allOpinions.map((eachOpinion) => {
              console.log(eachOpinion);
              if (eachOpinion.event._id === eventId) {
                return (
                  <p className="opinion-displayed"key={eachOpinion._id}>
                    {eachOpinion.person.name}: {eachOpinion.description}
                  </p>
                );
              }
            })}
        </p></div>
        
      </section>
    </div>
  );
}

export default EventDetails;
