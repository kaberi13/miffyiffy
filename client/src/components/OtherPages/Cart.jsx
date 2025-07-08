import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItems from './CartItems';
import OrderSummary from './OrderSummary';

export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

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

  const addItem = (newItem) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === newItem.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = subtotal > 1000 ? 0 : 80;
  const total = subtotal + delivery;

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
            padding: 0
          }}
        >
          ← Back to Home
        </button>
      </div>
      <h2>My Cart</h2>
      <div className="cart-content">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <button
              onClick={() => navigate("/")}
              style={{
                padding: "12px 24px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <CartItems
              items={cartItems}
              onUpdate={updateQuantity}
              onRemove={removeItem}
            />
            <OrderSummary
              subtotal={subtotal}
              delivery={delivery}
              total={total}
              onCheckout={() => navigate("/checkout")}
            />
          </>
        )}
      </div>
    </div>
  );
}