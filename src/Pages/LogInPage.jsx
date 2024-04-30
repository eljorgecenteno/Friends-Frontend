import axios from "axios";
import "./LogInPage.css";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

function LogInPage(props) {
const [email,setEmail] =useState("")
const [error,setError] =useState(null)
const [password,setPassword] =useState("")
const navigate = useNavigate()

const {authenticateUser} = useContext(AuthContext)
const handleSubmit = (e)=>{
    e.preventDefault();
    let user = {
        email, 
        password
    }
    axios.post(`${import.meta.env.VITE_API_URL}/auth/login`,user)
    .then(response => {
        localStorage.setItem("authToken",response.data.authToken)

        authenticateUser()
        console.log(response.data);
        navigate("/discover") // Assuming you want to log the response data
      })
    .catch((err)=>{
      setError(err.response.data.message)
console.log(err.response.data.message)
    })
    
}
  return (
    <div >
       
        <form id="log-in-container">
        <h1 id="title-logIn">Log in</h1>
        <label id="log-in-email">Email:<input onChange={(e) => setEmail(e.target.value)} type="email" /></label>
<label >Password<input onChange={(e) => setPassword(e.target.value)}type="password" /></label>
{error && <h3 id="logIn-error">Error: {error}</h3>}
<button id="logIn-button"onClick={handleSubmit}>Log in</button>
        </form>
   </div>
  );
}

export default LogInPage
