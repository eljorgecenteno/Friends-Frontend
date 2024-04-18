import "./HomePage.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Friends1 from "../Photos/Friends-1.jfif";
import Friends2 from "../Photos/Friends-2.jfif";
import Friends3 from "../Photos/Friends-3.jfif";
import Friends4 from "../Photos/Friends-4.jfif";
import Friends5 from "../Photos/Friends-5.jfif";
import Friends6 from "../Photos/Friends-6.jpeg";
import Friends7 from "../Photos/Friends-7.jfif";
import Friends8 from "../Photos/Friends-8.jfif";
import Friends9 from "../Photos/Friends-9.jpeg";
import Friends10 from "../Photos/Friends-10.jpeg";
import whiteLogo from "../Photos/Friends-logo-white.png";
import { useState } from "react";


function HomePage() {
  let opinions = [
    {
      name: "Perro Sánchez",
      city: "Madrid",
      opinion: "Friends opened me a lot of opportunities. I was new in Madrid and did not know many people. This app really helped me to connect with new people.",
    },
    {
      name: "Omar kamal",
      city: "London",
      opinion: "I was tired of watching The Rock films on my own... I created an event and many people joined! Was so funny! I will create an event soon to see my other favourite film... Barbie! ",
    },
    {
      name: "Carles Puyol",
      city: "Barcelona",
      opinion: "I didnt have anybody to share my passion in electronic music. Friends helped me to find people with my same interests in my city and now we go dancing together most weekends!",
    },
    {
      name: "Ilia Topuria",
      city: "Paris",
      opinion: "I had a lot of friends already in my city. But i love to connect and met new people. Friends gives the opportunity to meet really cool people in your area!",
    },
   {
      name: "David Brocano",
      city: "Berlin",
      opinion: "I ejoy so much going to museums with my new grop of friends! i joined an event for visiting art galleries and since them we created a group and became inseparable",
    },
  ];

  const [photo, setPhoto] = useState(Friends1);
  const [opacityActive, setOpacityActive] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpacityActive(0); // Reducir la opacidad a 0 para iniciar la transición
      setTimeout(() => {
        homePagePhoto(); // Cambiar la foto después de que la opacidad haya alcanzado 0
        setOpacityActive(1); // Restaurar la opacidad a 1 para finalizar la transición
      }, 500); // Después de 500 milisegundos (0.5 segundos), cambiar la foto
    }, 10000); // Cambiar la foto cada 5 segundos

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  function homePagePhoto() {
    let randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber === 0) {
      setPhoto(Friends1);
    }
    if (randomNumber === 1) {
      setPhoto(Friends2);
    }
    if (randomNumber === 2) {
      setPhoto(Friends3);
    }
    if (randomNumber === 3) {
      setPhoto(Friends4);
    }
    if (randomNumber === 4) {
      setPhoto(Friends5);
    }
    if (randomNumber === 5) {
      setPhoto(Friends6);
    }
    if (randomNumber === 6) {
      setPhoto(Friends7);
    }
    if (randomNumber === 7) {
      setPhoto(Friends8);
    }
    if (randomNumber === 8) {
      setPhoto(Friends9);
    }
    if (randomNumber === 9) {
      setPhoto(Friends10);
    }
    console.log("hola");
  }

  return (
    <div id="home-page-general-container">
      <div id="home-page-1bloq">
        <div id="home-page-text">
          <h1 id="home-page-text-h1">Meet new people in your area</h1>
          <Link to="/discover">
            <button id="button-homePage">discover</button>
          </Link>
          <h3 className="home-page-text-h3">People with your same interest are waiting to meet you!</h3>
          <br></br>
          <h3 className="home-page-text-h3">Talk to new people or join one of our events</h3>
          <br></br>
        </div>
        <img
          src={photo}
          alt="Photo of friends having fun"
          id="homePagePhoto"
          style={{
            opacity: opacityActive,
            transition: "opacity 0.5s ease-in-out",
          }}
        />
      </div>
      <div id="homePage-opinions" className="carousel slide">
        {opinions.map((eachOpinion) => {
         return (
          <div key={eachOpinion.name} id="homePage-eachOpinion"> 
          <h4 id="homePage-eachOpinion-name&city">{eachOpinion.name} , {eachOpinion.city}</h4>
          <p id="homePage-eachOpinion-opinion">{eachOpinion.opinion}</p>
          <img src={whiteLogo} alt="friends logo" id="logo-homepage-opinions" />
          </div>) 
      })}</div>

      <div id="homepage-last-space"></div>
    </div>
  );
}

export default HomePage;
