import './DiscoverPage.css'
import { Link } from "react-router-dom";
import DiscoverPeople from "../Photos/Discover-people.jpg";
import DiscoverEvents from "../Photos/Discover-events.jpg";
function DiscoverPage() {
 

  return (
    <>
    <div id="discover-page-container">
  <Link to="/discover/persons"><h1>Discover persons</h1>
  <img className="discover-page-photos" src={DiscoverPeople} alt="Tho girls having fun" /></Link>
  <Link to="/discover/events"><h1>Discover events</h1>
  <img src={DiscoverEvents} className="discover-page-photos" alt="" /></Link>
  </div>
    </>
  )
}

export default DiscoverPage