import React from 'react'

function Card({product , addItemToCart}) {
  return (
    <div className="product-card">
        <div className="image-container">
            <img src={product.images[0]}/>
        </div>
        
        <div className="content">
            <div className="category">{product.category.name}</div>
            <h2 className="title">{product.title}</h2>
            <p>
                {product.description}
            </p>
            
            <div className="price-row">
                <span className="price">${product.price}</span>
                <button onClick={()=>addItemToCart(product)} className="btn-add">Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Card