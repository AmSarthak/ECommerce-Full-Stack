import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Listing from './Components/ListingPage/Listing'
import LoginComponent from './Components/Login/Login'
import axios from 'axios'


function App() {

  const [isLoggedIn , setIsLoggedIn] = useState(false);
  
  function Login(username,pwd){
    axios.post("http://localhost:8080/login" , {id: 0 ,username : username , password : pwd}).then((e)=>{
      console.log(e)
      if(e.data == "Logged In"){
        setIsLoggedIn(true)
      }
      else{
        setIsLoggedIn(false)
        alert("Invalid Credentials")
      }
    })
  }

  return (
    <>
    <Header></Header>
    {!isLoggedIn && <LoginComponent Login={Login}></LoginComponent>}
    {isLoggedIn && <Listing></Listing> }
    </>
  )
}

export default App
