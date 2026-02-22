import React, { useEffect, useState } from 'react';
import './Cart.css';
import apiService from '../../service/api';
import axios from 'axios';

const ShoppingCart = ({goToListingPage}) => {
    const [subTotal , setSubTotal] = useState(0);
    const [items , setCartItems] = useState([]);

    useEffect(() => {
        upDateCart();
    }, [])
    function downloadInvoice(){
        window.location.href = "http://localhost:8080/export-pdf"
    }

    function upDateCart(){
        apiService.makeGetCall("Backend" , "/getCartItems" , (respData)=>{
            setCartItems(respData);
            setTimeout(() => {
                var total = 0;
                for(let i=0 ; i<respData.length;i++){
                    console.log(i)
                    total = total+respData[i].price;
                }
                setSubTotal(total);
            }, 100);
            
    })
    }

    function deleteFromCart(item){
        axios.delete('http://localhost:8080/'+item.id).then(()=>{
            upDateCart();
        })
    }

  return (
    <div className="cart-container">
        <a href='#' onClick={()=>goToListingPage(true)}>Shop More</a>
      <div className="cart-items-list">
        <h2 className="cart-title">Your Cart ({items.length})</h2>
        {items.map(item => (
          <div key={item.id} className="cart-card">
            <div className="item-info">
              <h3 className="item-name">{item.title}</h3>
            </div>
            <div className="item-price-section">
              <span className="item-price">${item.price.toFixed(2)}</span>
              <button onClick={()=>deleteFromCart(item)} className="remove-btn">Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary-card">
        <h3 className="summary-title">Order Summary</h3>
        <div className="summary-row">
          <span>Subtotal</span>
          <span>${subTotal}</span>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <span className="free-text">FREE</span>
        </div>
        <hr className="divider" />
        <div className="summary-row total">
          <span>Estimated Total</span>
          <span>${subTotal}</span>
        </div>
        <button onClick={()=>downloadInvoice()} className="checkout-btn">Download Invoice</button>
      </div>
    </div>
  );
};

export default ShoppingCart;