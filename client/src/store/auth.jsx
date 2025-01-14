import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const[token , setToken] = useState(localStorage.getItem('token'))
  const[user , setUser] = useState("")
  const [isLoading , setIsLoading] = useState(true)
  const authorizationToken = `Bearer ${token}`
  const API = import.meta.env.VITE_APP_URI

  let isLoggedIn = !!token;
  console.log("islogged in" , isLoggedIn);
  

  //function to stored the token in local storage
  const storeToken = (serverToken) => {
    setToken(serverToken)
    return localStorage.setItem("token", serverToken);
  };
  //Log Out User
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem('token')
  }

  // JWT_AUTHENTICATION TO Get curently logged in user data

  const userAuthentication = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`${API}/api/auth/user`,{
        method:"GET",
        headers:{
          Authorization: authorizationToken
        }
      })

      if(response.ok){
        const data = await response.json();
        setUser(data.userData)
        setIsLoading(false)
        console.log("user data" , data.userData);
      }else{
        console.log("Eror Fatching Data");
        setIsLoading(false)
        
      }  
    } catch (error) {
      console.error("Error Fetching Data" , error)
    }
  }
  



  useEffect(()=>{
        userAuthentication();
        
  }, [])


  return (
    <AuthContext.Provider value={{ API , storeToken , LogoutUser , isLoggedIn , user  , authorizationToken , isLoading}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};