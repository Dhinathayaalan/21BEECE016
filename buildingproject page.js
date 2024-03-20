// Importing necessary libraries and components
    import React, { useEffect, useState } from 'react';
    
    // Defining the Product component
    function Product() {
      const [products, setProducts] = useState([]);
    
      // Fetching product data from an API
      useEffect(() => {
        fetch('<https://api.example.com/products>')
          .then(response => response.json())
          .then(data => setProducts(data));
      }, []);
    
      return (
        <div className="product-page">
          {products.map(product => (
            <div key={product.id} className="product">
              <h4>{product.title}</h4>
              <p>{product.description}</p>
              <button>Add to cart</button>
            </div>
          ))}
        </div>
      );
    }
    
    export default Product;
     
