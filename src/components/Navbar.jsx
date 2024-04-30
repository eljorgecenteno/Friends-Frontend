import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../Photos/Friends_logo.svg.png";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import { useEffect } from "react";
function Navbar() {
  const [currentPage, setCurrentPage] = useState('home')
  const {user, isLoggedIn, logOutUser } = useContext(AuthContext)
  const [allInfoUser, setAllInfoUser] = useState([])

  useEffect(() => {
    if (user){
      axios.get(`${import.meta.env.VITE_API_URL}/api/persons/${user._id}`).then((thisUser) => {
        setAllInfoUser(thisUser.data)
       console.log(thisUser.data)
      });
    }
   
  }, [user]);

  return (
    <header>
      
        <nav id="nav-links-wrapper">
          <Link
            to="/"
            style={{ color: "mediumspringgreen", textDecoration: "none" }}
            onClick={() => setCurrentPage('/')}
          >
            <img
            id="logo"
              src={Logo}
              alt="What the fridge logo"
              className="nav-element"
            />
          </Link>

          <Link
            to="/discover"
            style={{ color: "black", textDecoration: "none" }}
            onClick={() => setCurrentPage('discover')}
          >
            <h4  className={currentPage === "discover" ? "selected-element" : 'nav-element' }>Discover</h4>
          </Link>

          <Link
            to="/FAQs"
            style={{ color: "black", textDecoration: "none" }}
            onClick={() => setCurrentPage('FAQs')}
          >
            <h4  className={currentPage === "FAQs" ? "selected-element" : 'nav-element' }>FAQ</h4>
          </Link>
       {!isLoggedIn  &&  <div id="profile-navbar">
          <img className="default-profile-img-navbar" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Default img" />
          <Link
            to="/SignUp"
            style={{ color: "black", textDecoration: "none" }}
            onClick={() => setCurrentPage('FAQs')}
          >
            <h4  className={currentPage === "SignUp" ? "selected-element" : 'nav-element' }>Sign up</h4>
          </Link>
          <Link
            to="/LogIn"
            style={{ color: "black", textDecoration: "none" }}
            onClick={() => setCurrentPage('FAQs')}
          >
            <h4  className={currentPage === "Log in" ? "selected-element" : 'nav-element' }>Log in</h4>
          </Link>
          </div>}
          {isLoggedIn && <div id="user-info-navbar"><Link id="link-to-profile-navbar"to={`persons/${allInfoUser._id}`}><p id="profile-name-navbar">{allInfoUser.name}</p><img className="default-profile-img-navbar" src={allInfoUser.profile_image_url ? allInfoUser.profile_image_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" } alt="Profile img" /></Link><div ><button id="log-out-button-navbar"onClick={logOutUser}>Log out</button> </div></div>
          }
        </nav>
    </header>
  );
}

export default Navbar;
