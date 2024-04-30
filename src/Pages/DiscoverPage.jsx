import './DiscoverPage.css'
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import DiscoverPeople from "../Photos/Discover-people.jpg";
import DiscoverEvents from "../Photos/Discover-events.jpg";
import { useContext } from "react";
function DiscoverPage() {
 
  const {user, isLoggedIn, logOutUser } = useContext(AuthContext)
  console.log(user)
  return (
    <>
    {!user && <div><div id="log-in-message-discover-page"><h2>To keep going you must Sign up or Log in</h2><Link style={{ textDecoration: 'none' }} to="/SignUp"><h2 className='logIn-and-signUp-discoverPage'>Sign up</h2></Link><Link style={{ textDecoration: 'none' }} to="/LogIn"><h2 className='logIn-and-signUp-discoverPage'>Log in</h2></Link></div><div id="discover-page-container">
  <Link   style={{ textDecoration: 'none' }} to="/SignUp"><h1 className="discover-page-titles">Discover persons</h1>
  <img className="discover-page-photos-no-logIn" src={DiscoverPeople} alt="Tho girls having fun" /></Link>
  <Link style={{ textDecoration: 'none' }} to="/SignUp"><h1 className="discover-page-titles">Discover events</h1>
  <img src={DiscoverEvents} className="discover-page-photos-no-logIn" alt="" /></Link>
  </div></div>}
    {user && <div id="discover-page-container">
  <Link   style={{ textDecoration: 'none' }} to="/discover/persons"><h1 className="discover-page-titles">Discover persons</h1>
  <img className="discover-page-photos" src={DiscoverPeople} alt="Tho girls having fun" /></Link>
  <Link style={{ textDecoration: 'none' }} to="/discover/events"><h1 className="discover-page-titles">Discover events</h1>
  <img src={DiscoverEvents} className="discover-page-photos" alt="" /></Link>
  </div>}
    
    </>
  )
}

export default DiscoverPage