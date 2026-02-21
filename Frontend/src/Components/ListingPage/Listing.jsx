import React from 'react'
import Card from '../Card/Card'
import { useState } from 'react'
import { useEffect } from 'react';
import Loader from '../../assets/loader.gif'
import axios from 'axios'


function Listing() {

    const [products,setProducts] = useState([]);
    const [cartItems , setCartItems] = useState([]);

    function addItemToCart(item){
       axios.post('http://localhost:8080/cartItem',item).then((res)=>{
        console.log(res)
        fetch('http://localhost:8080/getCartItems').then((res)=>res.json()).then((a)=>setCartItems(a))
       })
    }
    function downloadInvoice(){
        window.location.href = "http://localhost:8080/export-pdf"
    }

    function deleteFromCart(item){
        axios.delete('http://localhost:8080/'+item.id).then((res)=>{
            console.log(res);
            fetch('http://localhost:8080/getCartItems').then((res)=>res.json()).then((a)=>setCartItems(a))
        })
    }

    useEffect(()=>{
        fetch('http://localhost:3000/getProducts').then((res)=>res.json()).then((a)=>setProducts(a.data))
        fetch('http://localhost:8080/getCartItems').then((res)=>res.json()).then((a)=>setCartItems(a))
    },[])

  return (
    <>
    <span>Cart: {cartItems.length}<button type='button' className='btn' onClick={()=>downloadInvoice()}>Download Invoice</button></span>
    <ul>
        {cartItems.map((item)=>{
            return (<li>{item.title}. :: ${item.price}  <button type='button' onClick={()=>deleteFromCart(item)}>X</button></li>)
        })}
    </ul>

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