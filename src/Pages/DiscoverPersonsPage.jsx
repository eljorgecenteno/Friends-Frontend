import axios from "axios";
import "./DiscoverPersonsPage.css";
import { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function DiscoverPersonsPage() {
  const [allPersons, setAllpersons] = useState([]);
  const [allFilteredPersons, setAllFilteredpersons] = useState([]);
  const [Age, setAge] = useState([18, 100]);
  const [interest, setInterest] = useState([]);
  const [city, setCity] = useState("");
  const [seeInterest, setseeInterest] = useState(false);

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

  useEffect(() => {
    axios.get("http://localhost:5005/api/persons").then((allPersons) => {
      setAllpersons(allPersons.data);
      setAllFilteredpersons(allPersons.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Age)
    setInterest(e.target.checked);
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
    
    setInterest(selectedInterests);

    
  };

  useEffect(() => {
    let filteredPersons = allPersons.filter((onePerson) => {
      let interestMet = false;
      let cityAproval = false

      if( city === ""){
        cityAproval = true
      } else if (onePerson.city === city){
        cityAproval = true
      }
          

      if (interest.length === 0) {
        interestMet = true;
      }
      if (interest.length > 0) {
        for (let i = 0; i < interest.length; i++) {
          if (onePerson.interest.includes(interest[i])) {
            interestMet = true;
          }
        }
      }

      return (
        cityAproval &&
        interestMet &&
        onePerson.age > Age[0] &&
        onePerson.age < Age[1]
      );

        });
        setseeInterest(false)
    
    setAllFilteredpersons(filteredPersons);
  }, [interest, setAge]);

  const handleAgeChange = (event, newAge) => {
    setAge(newAge);
  };

  function seeOptions (){
 if (seeInterest === false){
  setseeInterest(true)
  
 } else {
  setseeInterest(false)
  
 }
  }
  return (
    <>

      <div id="discover-persons-container">
      <h2 style={{ marginRight: "40px" }}>Filter by</h2>
          <h3>Interests:</h3>
          <button id="see-interest-discover-page"onClick={seeOptions}>Choose interest ▼</button>
        <form onSubmit={handleSubmit}>
        <div id="discover-persons-form-container">
          
          {seeInterest && 
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
            </div>}
            
              <h3 style={{ marginLeft: "110px" }}>City:</h3>
              <select
                name="cityselected"
                onChange={(e) => setCity(e.target.value)}
                id="discover-persons-select-city"
                defaultValue=""
                
              >
                <option value="" disabled hidden>Selecciona una ciudad</option>
                <option value="London">London</option>
                <option value="Paris">Paris</option>
                <option value="Madrid">Madrid</option>
                <option value="Berlin">Berlin</option>
                <option value="Athens">Athens</option>
              </select>
              <h3 style={{ marginRight: "20px" }}>Age:</h3>
          <Box sx={{ width: 200 }}>
            <Slider
              getAriaLabel={() => "Age range"}
              value={Age}
              onChange={handleAgeChange}
              valueLabelDisplay="auto"
              min={18}
            />
          </Box>
          
          <button type="submit" id="discover-persons-filter-button">Search</button>
        </div>
        </form>
        
         
          </div>
     <div id="eachPersonContainer">
      {allPersons &&
     
        allFilteredPersons.map((eachPerson) => {
          
          return (
            <Link key={eachPerson._id} to={`/persons/${eachPerson._id}`}  id="eachPerson" >
            <div   >
              <img
                src={eachPerson.profile_image_url}
                alt={`Profile image of ${eachPerson.name}`}
              />
              
              <h3 id="eachPerson-age-and-name-discover-persons-page">{eachPerson.name}, {eachPerson.age}</h3>
            
              <h3> {eachPerson.city}</h3>
              <h4>{eachPerson.interest.map((eachInterest,index)=>{
                return index === eachPerson.interest.length -1 ? `${eachInterest}. `  : `${eachInterest}, ` 
              })}</h4>
              
              <p>{eachPerson.motto}</p>
              
            </div>
            </Link>
          );
         
        })}</div>
         
    </>
  );
}

export default DiscoverPersonsPage;
