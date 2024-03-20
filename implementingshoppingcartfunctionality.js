// Importing necessary libraries and components
    import React, { useState } from 'react';
    
    // Defining the Cart component
    function Cart() {
      const [cartItems, setCartItems] = useState([]);
    
      // Function to add a product to the cart
      function addToCart(product) {
        setCartItems(prevItems => [...prevItems, product]);
      }
    
      return (
        <div className="cart">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <h4>{item.title}</h4>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      );
    }
    
    export default Cart;
