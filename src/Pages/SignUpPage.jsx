import { useState } from "react";
import axios from "axios";
import "./SignUpPage.css";
import { useNavigate } from "react-router-dom";
function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(18);
  const [interest, setInterest] = useState([]);
  const [city, setCity] = useState("");
  const [imageUrl, setImageUrl] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
  const [description, setDescription] = useState("");
  const [Chess, setChess] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

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

  let newPerson = {
    email,
    password,
    name,
    age,
    interest,
    city,
    description,
    profile_image_url: imageUrl,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
      selectedInterests.push("Movie Night");
    }
    if (Running === true) {
      selectedInterests.push("Running");
    }
    if (LanguageExchange === true) {
      selectedInterests.push("Language Exchange");
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

    newPerson.interest = selectedInterests;
    console.log(interest);
    axios
      .post(`${import.meta.env.VITE_API_URL}/auth/persons`, newPerson)
      .then((createdUser) => {
        navigate("/logIn");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setError(err.response.data.message);
      });
  };

  return (
    <>
      <form id="sign-up-form-container">
        <h1>Create an account</h1>
        <label className="each-input-sign-up-page">
          Email:
          <input onChange={(e) => setEmail(e.target.value)} type="email" />
        </label>
        <label className="each-input-sign-up-page">
          Password
          <input onChange={(e) => setPassword(e.target.value)} type="password" />
        </label>
        <label className="each-input-sign-up-page">
          Name
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </label>
        <label className="each-input-sign-up-page">
          Age
          <input min={18} max={100} type="number" onChange={(e) => setAge(e.target.value)} />
        </label>
        <h3 className="each-input-sign-up-page"> Choose your Interests:</h3>
        <div>
          <input type="checkbox" name="Chess" checked={Chess} onChange={ChessHandleChange}></input>
          <label htmlFor="Chess">Chess</label>
          <br></br>
          <input type="checkbox" name="Cinema" checked={Cinema} onChange={cinemaHandleChange}></input>
          <label htmlFor="Cinema"> Cinema</label>
          <br></br>
          <input type="checkbox" name="Poker" checked={Poker} onChange={pokerHandleChange}></input>
          <label htmlFor="Poker"> Poker</label>
          <br></br>
          <input type="checkbox" name="Theater" checked={Theater} onChange={theaterHandleChange}></input>
          <label htmlFor="Theater"> Theater</label>
          <br></br>
          <input type="checkbox" name="Party" checked={Party} onChange={partyHandleChange}></input>
          <label htmlFor="Party"> Party</label>
          <br></br>
          <input type="checkbox" name="Restaurants" checked={Restaurants} onChange={restaurantshandleChange}></input>
          <label htmlFor="Restaurants"> Restaurants</label>
          <br></br>
          <input type="checkbox" name="Hiking" checked={Hiking} onChange={hikingHandleChange}></input>
          <label htmlFor="Hiking"> Hiking</label>
          <br></br>
          <input type="checkbox" name="Football" checked={Football} onChange={footballHandleChange}></input>
          <label htmlFor="Football"> Football</label>
          <br></br>
          <input type="checkbox" name="MovieNight" checked={MovieNight} onChange={movieNightHandleChange}></input>
          <label htmlFor="Movie Night"> Movie Night</label>
          <br></br>
          <input type="checkbox" name="Running" checked={Running} onChange={runningHandleChange}></input>
          <label htmlFor="Running"> Running</label>
          <br></br>
          <input type="checkbox" name="Language exchange" checked={LanguageExchange} onChange={languageExchangeHandleChange}></input>
          <label htmlFor="Language exchange"> Language exchange</label>
          <br></br>
          <input type="checkbox" name="Trips" checked={Trips} onChange={tripsHandleChange}></input>
          <label htmlFor="Trips"> Trips</label>
          <br></br>
          <input type="checkbox" name="Basketball" checked={Basketball} onChange={basketballHandleChange}></input>
          <label htmlFor="Basketball"> Basketball</label>
          <br></br>
          <input type="checkbox" name="Literature" checked={Literature} onChange={literatureHandleChange}></input>
          <label htmlFor="Literature"> Literature</label>
          <br></br>
        </div>

        <h3 style={{ marginTop: "10px" }}>City</h3>

        <select name="cityselected" defaultValue="" className="each-input-sign-up-page" onChange={(e) => setCity(e.target.value)}>
          <option value="" disabled hidden>
            Choose your city
          </option>
          <option value="London">London</option>
          <option value="Paris">Paris</option>º<option value="Madrid">Madrid</option>
          <option value="Berlin">Berlin</option>
          <option value="Athens">Athens</option>
        </select>
        <label className="each-input-sign-up-page">
          About you<textarea onChange={(e) => setDescription(e.target.value)} id="description" placeholder="Write a brief description about yourself" name="description" rows="4" cols="50"></textarea>
        </label>
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
        {error && <h2>Error: {error}</h2>}
        <button type="submit" className="each-input-sign-up-page" id="create-account-button" onClick={handleSubmit}>
          Create account
        </button>
      </form>
    </>
  );
}

export default SignUpPage;
