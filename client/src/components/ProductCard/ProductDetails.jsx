import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../OtherPages/CartContext'// Adjust path as needed
import './ProductDetails.css';

function ProductDetails({ id, image, name, brand, price, options = [] }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState(options[0] || 'Default');
  const [isAdded, setIsAdded] = useState(false);
  
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: id || Date.now(), // Use provided id or generate one
      title: name,
      brand: brand,
      price: price,
      quantity: quantity,
      option: selectedOption,
      image: image
    };

    addToCart(cartItem);
    setIsAdded(true);
    
    // Reset the button state after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const handleBuyNow = () => {
    // Add to cart first
    handleAddToCart();
    // Then navigate to checkout
    setTimeout(() => {
      navigate('/checkout');
    }, 500);
  };

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>

      <div className="product-info">
        {brand && <p className="brand">{brand}</p>}
        <h2>{name}</h2>
        <p className="price">Rs. {price}</p>
        
        {/* Option selector if product has options */}
        {options.length > 0 && (
          <div className="product-options">
            <label htmlFor="option-select">Choose option:</label>
            <select 
              id="option-select"
              value={selectedOption} 
              onChange={(e) => setSelectedOption(e.target.value)}
              className="option-select"
            >
              {options.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        )}
        
        <div className="quantity-control">
          <button onClick={handleDecrease}>-</button>
          <input type="number" value={quantity} readOnly />
          <button onClick={handleIncrease}>+</button>
        </div>

        <button className="wishlist-btn">♡ Add to wishlist</button>
        
        <button 
          className={`add-cart-btn ${isAdded ? 'added' : ''}`}
          onClick={handleAddToCart}
          disabled={isAdded}
        >
          {isAdded ? '✓ Added to Cart!' : 'Add to cart'}
        </button>
        
        <button 
          className="buy-now-btn"
          onClick={handleBuyNow}
        >
          Buy it now
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;