// src/components/OtherPages/CartItems.jsx
import React from 'react';
import './Cart.css';

export default function CartItems({ items, onUpdate, onRemove }) {
  return (
    <div className="cart-items">
      {items.map(item => (
        <div key={item.id} className="item-card">
          <img 
            src={item.image} 
            alt={item.name || item.title} 
            className="product-image"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />
          <div className="item-details">
            <h4 style={{ margin: "0 0 0.5rem 0", color: "#a02c5a" }}>
              {item.name || item.title}
            </h4>
            <p style={{ margin: "0.2rem 0", color: "#666" }}>
              ₹{item.price}
            </p>
            {item.brand && (
              <p style={{ margin: "0.2rem 0", color: "#999", fontSize: "0.9rem" }}>
                Brand: {item.brand}
              </p>
            )}
            {item.option && (
              <p style={{ margin: "0.2rem 0", color: "#999", fontSize: "0.9rem" }}>
                Option: {item.option}
              </p>
            )}
            <div className="quantity">
              <button 
                onClick={() => onUpdate(item.id, -1)}
                disabled={item.quantity <= 1}
                style={{
                  opacity: item.quantity <= 1 ? 0.5 : 1,
                  cursor: item.quantity <= 1 ? 'not-allowed' : 'pointer'
                }}
              >
                -
              </button>
              <span style={{ 
                minWidth: "30px", 
                textAlign: "center", 
                fontWeight: "bold",
                color: "#a02c5a"
              }}>
                {item.quantity}
              </span>
              <button onClick={() => onUpdate(item.id, 1)}>+</button>
            </div>
          </div>
          <div className="item-price" style={{ 
            fontWeight: "bold", 
            color: "#a02c5a",
            fontSize: "1.1rem",
            marginLeft: "auto"
          }}>
            ₹{(item.price * item.quantity).toFixed(2)}
          </div>
          <button 
            className="delete" 
            onClick={() => onRemove(item.id)}
            title="Remove from cart"
            style={{
              marginLeft: "1rem",
              padding: "0.5rem",
              borderRadius: "50%",
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#ffebee"}
            onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}
          >
            🗑️
          </button>
        </div>
      ))}
      
      <div style={{ marginTop: "1rem", textAlign: "center" }}>
        <button
          style={{
            background: "none",
            border: "1px solid #d080a8",
            color: "#d080a8",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "0.9rem"
          }}
          onClick={() => {
            // You can implement add note functionality here
            alert('Note functionality can be implemented here');
          }}
        >
          📝 Add a note
        </button>
      </div>
    </div>
  );
}