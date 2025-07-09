// src/components/ProductCard/ProductDetails.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './ProductDetails.css';

function ProductDetails({ image, name, brand, price, id }) {
  const navigate = useNavigate();
  const { addToCart, isInCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Generate a unique ID if not provided
  const productId = id || `${name}-${price}`.replace(/\s+/g, '-').toLowerCase();

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };

  const handleAddToCart = () => {
    const product = {
      id: productId,
      name,
      brand,
      price: parseFloat(price),
      image,
      quantity
    };
    
    addToCart(product);
    
    // Show success message
    alert(`${name} added to cart!`);
  };

  const handleBuyNow = () => {
    const product = {
      id: productId,
      name,
      brand,
      price: parseFloat(price),
      image,
      quantity
    };
    
    addToCart(product);
    navigate('/cart');
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    // You can implement wishlist functionality here
    alert(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist');
  };

  const inCart = isInCart(productId);

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>

      <div className="product-info">
        {brand && <h4>{brand}</h4>}
        <h2>{name}</h2>
        <p className="price">₹{price}</p>
        
        <div className="quantity-control">
          <button 
            onClick={handleDecrease}
            disabled={quantity <= 1}
            style={{
              opacity: quantity <= 1 ? 0.5 : 1,
              cursor: quantity <= 1 ? 'not-allowed' : 'pointer'
            }}
          >
            -
          </button>
          <input 
            type="number" 
            value={quantity} 
            onChange={(e) => {
              const value = parseInt(e.target.value) || 1;
              setQuantity(value > 0 ? value : 1);
            }}
            min="1"
          />
          <button onClick={handleIncrease}>+</button>
        </div>

        <button 
          className={`wishlist-btn ${isWishlisted ? 'wishlisted' : ''}`}
          onClick={handleWishlist}
          style={{
            background: isWishlisted ? '#cc6699' : 'white',
            color: isWishlisted ? 'white' : '#cc6699'
          }}
        >
          {isWishlisted ? '♥' : '♡'} {isWishlisted ? 'In wishlist' : 'Add to wishlist'}
        </button>
        
        <button 
          className="add-cart-btn"
          onClick={handleAddToCart}
          style={{
            background: inCart ? '#cc6699' : 'white',
            color: inCart ? 'white' : '#cc6699'
          }}
        >
          {inCart ? '✓ In Cart' : 'Add to cart'}
        </button>
        
        <button 
          className="buy-now-btn"
          onClick={handleBuyNow}
        >
          Buy it now
        </button>

        {/* Additional product info */}
        <div style={{ 
          marginTop: "1rem", 
          fontSize: "0.9rem", 
          color: "#666",
          textAlign: "center"
        }}>
          <p>✓ Free delivery on orders above ₹1000</p>
          <p>✓ 7-day return policy</p>
          <p>✓ Cash on delivery available</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;