import { useState, useEffect } from "react";
import axios from "axios";
function SignUpPage() {
const [email,setEmail] =useState("")
const [password,setPassword] =useState("")
const [name,setName] =useState("")
const [age, setAge] = useState(0)
const [interest, setInterest] = useState([])
const [city, setCity] = useState("")
const [description, setDescription]= useState("")


const handleSubmit = (e) => {
    e.preventDefault();
    console.log("guapos")
let newPerson = {
    email, password, name, age, interest, city, description
}

axios.post("http://localhost:5005/api/persons",newPerson).then((personCreated) => {
 console.log(personCreated)
  });

}  

  return (
    <>
    <h1>Sign up</h1>
  <form >
<label>Email:<input type="email" /></label>
<label>Password<input type="password" /></label>
<label>Name<input type="text" /></label>
<label>Age<input type="number" /></label>
<label>Interests<input type="checkbox" /></label>
<select
                name="cityselected"
                defaultValue=""
                
              >
                <option value="" disabled hidden>Choose a city</option>
                <option value="London">London</option>
                <option value="Paris">Paris</option>º
                <option value="Madrid">Madrid</option>
                <option value="Berlin">Berlin</option>
                <option value="Athens">Athens</option>
              </select>
<label>img<input type="img" /></label>
<label>Description about yourself<textarea id="description" name="description" rows="4" cols="50"></textarea></label>
<button type="submit" onClick={handleSubmit}>Create account</button>
  </form>
    </>
  )
}

export default SignUpPage