import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PersonDetails from "../components/PersonDetails";
import personsService from "../../services/persons.service";

const SERVER_URL="http://localhost:5010"

function PersonDetailsPage() {
  const { personId } = useParams();
  const [onePerson, setOnePerson] = useState(null);
// where is 5173 to find? we are making a request to the database url! right?
  
const getPerson = () => {
  const token = localStorage.getItem('authToken')
    personsService.getPerson(personId)
    .then((response) => {
      const singlePerson = response.data;
      setOnePerson(singlePerson);
    })
    .catch((error) => console.log(error));
};

useEffect(()=> {
  getPerson();
}, [] )

if (onePerson === null) {
  return (
    <div>
      <div>Loading...</div>
    </div>
  )  
}

return (
  <div>
  <PersonDetails person={onePerson}></PersonDetails>
  </div>
  )
}
export default PersonDetailsPage

