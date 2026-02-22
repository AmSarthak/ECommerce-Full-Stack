import React from 'react'
import Card from '../Card/Card'
import { useState } from 'react'
import { useEffect } from 'react';
import Loader from '../../assets/loader.gif'
import axios from 'axios'
import apiService from '../../service/api';


function Listing({goToCart}) {

    const [products,setProducts] = useState([]);

    function addItemToCart(item){
        apiService.makePostCall("Backend", "/cartItem" , item , ()=>{
            alert("Item added")
        })
    }
    
    function getInitialInventory(){
        apiService.makeGetCall("Inventory" , "/getProducts" , (respData)=>{
            setProducts(respData.data)
        })
    }
    useEffect(()=>{
        getInitialInventory();
    },[])

  return (
    <>
    <button onClick={()=>goToCart(true)} className="cart-button">
        <div className="cart-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>          
        </div>
        <span className="cart-text">Go to Cart</span>
        </button>
    <div className="product-grid">
        {products.length === 0 ? (
            <div className="loader-container">
            <img src={Loader} alt="Loading..." />
            </div>
        ) : (
            products.map((i) => (
            <Card addItemToCart={addItemToCart} key={i.id} product={i} />
            ))
        )}
        </div>
    </>
  )
}

export default Listing