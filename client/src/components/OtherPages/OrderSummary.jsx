// src/components/OtherPages/OrderSummary.jsx
import React from "react";
import "./Cart.css";

export default function OrderSummary({ subtotal, delivery, total, onCheckout }) {
  const formatPrice = (price) => {
    return typeof price === 'number' ? price.toFixed(2) : '0.00';
  };

  return (
    <div className="order-summary">
      <h3 style={{ color: "#a02c5a", marginBottom: "1rem" }}>Order Summary</h3>
      
      <div className="summary-item">
        <span>Subtotal:</span>
        <span>₹{formatPrice(subtotal)}</span>
      </div>
      
      <div className="summary-item">
        <span>Delivery:</span>
        <span style={{ color: delivery === 0 ? "#28a745" : "#a02c5a" }}>
          {delivery === 0 ? "FREE" : `₹${formatPrice(delivery)}`}
        </span>
      </div>
      
      {subtotal > 0 && subtotal < 1000 && (
        <div style={{ 
          fontSize: "0.8rem", 
          color: "#666", 
          marginBottom: "0.5rem",
          textAlign: "center"
        }}>
          Add ₹{formatPrice(1000 - subtotal)} more for free delivery!
        </div>
      )}
      
      <hr style={{ 
        border: "none", 
        borderTop: "1px solid #f6c1d8", 
        margin: "1rem 0" 
      }} />
      
      <div className="summary-item total">
        <span>Total:</span>
        <span>₹{formatPrice(total)}</span>
      </div>

      <button
        className="checkout-btn"
        onClick={onCheckout}
        disabled={total <= 0}
        style={{
          opacity: total <= 0 ? 0.5 : 1,
          cursor: total <= 0 ? 'not-allowed' : 'pointer'
        }}
      >
        Proceed to Checkout
      </button>

      <p className="secure-text">
        🔒 100% secure payment
      </p>
      
      <div style={{ marginTop: "1rem", fontSize: "0.8rem", color: "#666" }}>
        <p>✓ Easy returns within 7 days</p>
        <p>✓ Cash on delivery available</p>
        <p>✓ Customer support 24/7</p>
      </div>
    </div>
  );
}