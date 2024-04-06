import './DiscoverPage.css'
import { Link } from "react-router-dom";

function DiscoverPage() {
 

  return (
    <>
  <Link to="/discover/persons"><h1>Discover persons</h1></Link>
  <Link to="/discover/events"><h1>Discover events</h1></Link>
    </>
  )
}

export default DiscoverPage