import {Route, Routes} from "react-router-dom"
import './App.css'
import HomePage from "./Pages/HomePage"
import DiscoverPage from "./Pages/DiscoverPage"
import Navbar from "./components/Navbar"
import FAQPage from "./Pages/FAQPage"
import Footer from "./components/Footer"
import DiscoverPersonsPage from "./Pages/DiscoverPersonsPage"
import DiscoverEventsPage from "./Pages/DicoverEventsPage"
import ErrorPage from "./Pages/ErrorPage"
function App() {
 

  return (
    <>
  
  <Navbar></Navbar>
  <Routes>
  <Route path='/' element={<HomePage></HomePage>}></Route>
  <Route path='/discover' element={<DiscoverPage></DiscoverPage>}></Route>
  <Route path="/discover/persons" element={<DiscoverPersonsPage></DiscoverPersonsPage>}></Route>
  <Route path="/discover/events" element={<DiscoverEventsPage></DiscoverEventsPage>}></Route>
  <Route path='/FAQs' element={<FAQPage></FAQPage>}></Route>
  <Route path='/*' element={<ErrorPage></ErrorPage>}></Route>
  </Routes>
  <Footer></Footer>
    </>
  )
}

export default App
