import React, {useState, useEffect, createContext} from "react"; 
import axios from "axios";

const AuthContext = createContext(); 

function AuthProviderWrapper(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(false)



return (
    <AuthContext.Provider value={{isLoggedIn, isLoading, user}}>
      
      {props.children}

    </AuthContext.Provider>
)

}



