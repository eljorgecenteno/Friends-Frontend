import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import DiscoverPage from "./Pages/DiscoverPage";
import Navbar from "./components/Navbar";
import FAQPage from "./Pages/FAQPage";
import Footer from "./components/Footer";
import DiscoverPersonsPage from "./Pages/DiscoverPersonsPage";
import DiscoverEventsPage from "./Pages/DiscoverEventsPage";
import ErrorPage from "./Pages/ErrorPage";
import PersonDetailsPage from "./Pages/PersonDetailsPage";
import SignUpPage from "./Pages/SignUpPage";
import LogInPage from "./Pages/LogInPage";
import EventDetailsPage from "./Pages/EventDetailsPage";
import EditEventPage from "./Pages/EditEventPage";
import IsPrivate from "./components/isPrivate";
import IsAnon from "./components/isAnon";
import CreateEventPage from "./Pages/CreateEventPage";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/discover" element={<DiscoverPage></DiscoverPage>}></Route>
        <Route path="/discover/persons" element={<IsPrivate><DiscoverPersonsPage></DiscoverPersonsPage></IsPrivate>}></Route>
        <Route path="persons/:personId" element={<IsPrivate><PersonDetailsPage></PersonDetailsPage></IsPrivate>}></Route>
        <Route path="/discover/events" element={<IsPrivate><DiscoverEventsPage></DiscoverEventsPage></IsPrivate>}></Route>
        <Route path="/events/create" element={<IsPrivate><CreateEventPage></CreateEventPage></IsPrivate>}></Route>
        <Route path="/events/:eventId" element={<IsPrivate><EventDetailsPage></EventDetailsPage></IsPrivate>}></Route>
        <Route path="/events/edit/:eventId" element={<IsPrivate><EditEventPage></EditEventPage></IsPrivate>}></Route>
       
        <Route path="/FAQs" element={<FAQPage></FAQPage>}></Route>
        <Route path="/SignUp" element={<IsAnon><SignUpPage></SignUpPage></IsAnon>}></Route>
        <Route path="/logIn" element={<IsAnon><LogInPage></LogInPage></IsAnon>}></Route>
        <Route path="/*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
