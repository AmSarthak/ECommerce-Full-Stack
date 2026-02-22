import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Listing from './Components/ListingPage/Listing'
import LoginComponent from './Components/Login/Login'
import axios from 'axios'
import apiService from './service/api'
import ShoppingCart from './Components/Cart/Cart'


function App() {

  const [isLoggedIn , setIsLoggedIn] = useState(false);
  const [isCartPage , setIsCartPage] = useState(false);
  
  function Login(username,pwd){

    apiService.makePostCall("Backend" , "/login" , {id: 0 ,username : username , password : pwd} , (response)=>{
        if(response == "Logged In"){
          setIsLoggedIn(true);
        }
        else{
          setIsLoggedIn(false);
          alert("Invalid Credentials. Please try again");
        }
    })
  }

  function goToCart(){
    setIsCartPage(true);
  }

  function goToListingPage(){
    setIsCartPage(false);
  }

  return (
    <>
    <Header></Header>
    {!isLoggedIn && <LoginComponent Login={Login}></LoginComponent>}
    {isLoggedIn && !isCartPage && <Listing goToCart={goToCart}></Listing> }
    {isLoggedIn && isCartPage && <ShoppingCart goToListingPage={goToListingPage}></ShoppingCart>}
    </>
  )
}

export default App
