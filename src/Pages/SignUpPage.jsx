import { useState, useEffect } from "react";
import axios from "axios";
import "./SignUpPage.css";
function SignUpPage() {
const [email,setEmail] =useState("")
const [password,setPassword] =useState("")
const [name,setName] =useState("")
const [age, setAge] = useState(0)
const [interest, setInterest] = useState([])
const [city, setCity] = useState("")
const [description, setDescription]= useState("")
const [Chess, setChess] = useState(false);
  
const ChessHandleChange = (e) => {
  setChess(e.target.checked);
};
const [Cinema, setCinema] = useState(false);
const cinemaHandleChange = (e) => {
  setCinema(e.target.checked);
};
const [Poker, setPoker] = useState(false);
const pokerHandleChange = (e) => {
  setPoker(e.target.checked);
};
const [Theater, setTheater] = useState(false);
const theaterHandleChange = (e) => {
  setTheater(e.target.checked);
};
const [Party, setParty] = useState(false);
const partyHandleChange = (e) => {
  setParty(e.target.checked);
};
const [Restaurants, setRestaurants] = useState(false);
const restaurantshandleChange = (e) => {
  setRestaurants(e.target.checked);
};
const [Hiking, setHiking] = useState(false);
const hikingHandleChange = (e) => {
  setHiking(e.target.checked);
};
const [Football, setFootball] = useState(false);
const footballHandleChange = (e) => {
  setFootball(e.target.checked);
};
const [MovieNight, setMovieNight] = useState(false);
const movieNightHandleChange = (e) => {
  setMovieNight(e.target.checked);
};
const [Running, setRunning] = useState(false);
const runningHandleChange = (e) => {
  setRunning(e.target.checked);
};
const [LanguageExchange, setLanguageExchange] = useState(false);
const languageExchangeHandleChange = (e) => {
  setLanguageExchange(e.target.checked);
};
const [Trips, setTrips] = useState(false);
const tripsHandleChange = (e) => {
  setTrips(e.target.checked);
};
const [Literature, setLiterature] = useState(false);
const literatureHandleChange = (e) => {
  setLiterature(e.target.checked);
};
const [Basketball, setBasketball] = useState(false);
const basketballHandleChange = (e) => {
  setBasketball(e.target.checked);
};





const handleSubmit = (e) => {
    e.preventDefault();
    console.log("guapos")
let newPerson = {
    email, password, name, age, interest, city, description
}


const selectedInterests = [];
if (Chess === true) {
  selectedInterests.push("Chess");
}
if (Cinema === true) {
  selectedInterests.push("Cinema");
}
if (Poker === true) {
  selectedInterests.push("Poker");
}
if (Theater === true) {
  selectedInterests.push("Theater");
}
if (Party === true) {
  selectedInterests.push("Party");
}
if (Restaurants === true) {
  selectedInterests.push("Restaurants");
}
if (Hiking === true) {
  selectedInterests.push("Hiking");
}
if (Football === true) {
  selectedInterests.push("Football");
}
if (MovieNight === true) {
  selectedInterests.push("Movie night");
}
if (Running === true) {
  selectedInterests.push("Running");
}
if (LanguageExchange === true) {
  selectedInterests.push("Language exchange");
}
if (Trips === true) {
  selectedInterests.push("Trips");
}
if (Basketball === true) {
  selectedInterests.push("Basketball");
}
if (Literature === true) {
  selectedInterests.push("Literature");
}

setInterest(selectedInterests)

axios.post("http://localhost:5005/api/persons",newPerson).then((personCreated) => {
 console.log(personCreated)
  });

}  

  return (
    <>
    <h1>Sign up</h1>
  <form id="sign-up-form-container">
<label>Email:<input onChange={(e) => setEmail(e.target.value)} type="email" /></label>
<label>Password<input onChange={(e) => setPassword(e.target.value)}type="password" /></label>
<label>Name<input type="text" onChange={(e) => setName(e.target.value)}/></label>
<label>Age<input type="number" onChange={(e) => setAge(e.target.value)}/></label>
<h3>Interests</h3>
<div >
                  <input
              type="checkbox"
              name="Chess"
              checked={Chess}
              onChange={ChessHandleChange}
            ></input>
            <label htmlFor="Chess">Chess</label>
            <br></br>
            <input
              type="checkbox"
              name="Cinema"
              checked={Cinema}
              onChange={cinemaHandleChange}
            ></input>
            <label htmlFor="Cinema"> Cinema</label>
            <br></br>
            <input
              type="checkbox"
              name="Poker"
              checked={Poker}
              onChange={pokerHandleChange}
            ></input>
            <label htmlFor="Poker"> Poker</label>
            <br></br>
            <input
              type="checkbox"
              name="Theater"
              checked={Theater}
              onChange={theaterHandleChange}
            ></input>
            <label htmlFor="Theater"> Theater</label>
            <br></br>
            <input
              type="checkbox"
              name="Party"
              checked={Party}
              onChange={partyHandleChange}
            ></input>
            <label htmlFor="Party"> Party</label>
            <br></br>
            <input
              type="checkbox"
              name="Restaurants"
              checked={Restaurants}
              onChange={restaurantshandleChange}
            ></input>
            <label htmlFor="Restaurants"> Restaurants</label>
            <br></br>
            <input
              type="checkbox"
              name="Hiking"
              checked={Hiking}
              onChange={hikingHandleChange}
            ></input>
            <label htmlFor="Hiking"> Hiking</label>
            <br></br>
            <input
              type="checkbox"
              name="Football"
              checked={Football}
              onChange={footballHandleChange}
            ></input>
            <label htmlFor="Football"> Football</label>
            <br></br>
            <input
              type="checkbox"
              name="MovieNight"
              checked={MovieNight}
              onChange={movieNightHandleChange}
            ></input>
            <label htmlFor="Movie Night"> Movie Night</label>
            <br></br>
            <input
              type="checkbox"
              name="Running"
              checked={Running}
              onChange={runningHandleChange}
            ></input>
            <label htmlFor="Running"> Running</label>
            <br></br>
            <input
              type="checkbox"
              name="Language exchange"
              checked={LanguageExchange}
              onChange={languageExchangeHandleChange}
            ></input>
            <label htmlFor="Language exchange"> Language exchange</label>
            <br></br>
            <input
              type="checkbox"
              name="Trips"
              checked={Trips}
              onChange={tripsHandleChange}
            ></input>
            <label htmlFor="Trips"> Trips</label>
            <br></br>
            <input
              type="checkbox"
              name="Basketball"
              checked={Basketball}
              onChange={basketballHandleChange}
            ></input>
            <label htmlFor="Basketball"> Basketball</label>
            <br></br>
            <input
              type="checkbox"
              name="Literature"
              checked={Literature}
              onChange={literatureHandleChange}
            ></input>
            <label htmlFor="Literature"> Literature</label>
            <br></br>
            </div>
<select
                name="cityselected"
                defaultValue=""
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="" disabled hidden>Choose a city</option>
                <option value="London">London</option>
                <option value="Paris">Paris</option>º
                <option value="Madrid">Madrid</option>
                <option value="Berlin">Berlin</option>
                <option value="Athens">Athens</option>
              </select>
<label>img<input type="img" /></label>
<label>Description about yourself<textarea  onChange={(e) => setDescription(e.target.value)}id="description" name="description" rows="4" cols="50"></textarea></label>
<button type="submit" onClick={handleSubmit}>Create account</button>
  </form>
    </>
  )
}

export default SignUpPage