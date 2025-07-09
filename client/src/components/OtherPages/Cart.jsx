// src/components/OtherPages/Cart.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CartItems from './CartItems';
import OrderSummary from './OrderSummary';
import './Cart.css';

export default function Cart() {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  const updateQuantity = (id, amount) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = id => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };


  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = subtotal > 1000 ? 0 : 80;
  const total = subtotal + delivery;

  const handleUpdateQuantity = (id, change) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + change);
    }
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    
    // You can add your checkout logic here
    console.log('Proceeding to checkout with items:', cartItems);
    navigate('/checkout');
  };

  return (
    <div className="cart-container">
      <div style={{ marginBottom: "1rem" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            background: "none",
            border: "none",
            color: "#555",
            fontSize: "16px",
            cursor: "pointer",
            padding: 0,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}
        >
          ← Back to Home
        </button>
      </div>
      
      <h2 style={{ color: "#a02c5a", marginBottom: "1rem" }}>
        My Cart ({cartItems.length} item{cartItems.length !== 1 ? 's' : ''})
      </h2>
      
      <div className="cart-content">
        {cartItems.length === 0 ? (
          <div className="empty-cart" style={{ 
            textAlign: "center", 
            width: "100%", 
            padding: "3rem",
            color: "#a02c5a"
          }}>
            <h3>Your cart is empty</h3>
            <p style={{ margin: "1rem 0", color: "#666" }}>
              Looks like you haven't added any items to your cart yet.
            </p>
            <button
              onClick={() => navigate("/")}
              style={{
                padding: "12px 24px",
                backgroundColor: "#d080a8",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                transition: "background 0.3s ease"
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "#c26492"}
              onMouseOut={(e) => e.target.style.backgroundColor = "#d080a8"}
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <CartItems
              items={cartItems}
              onUpdate={handleUpdateQuantity}
              onRemove={handleRemoveItem}
            />
            <OrderSummary
              subtotal={subtotal}
              delivery={delivery}
              total={total}
              onCheckout={handleCheckout}
            />
          </>
        )}
      </div>
    </div>
  );
}