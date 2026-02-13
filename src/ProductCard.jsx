import React from "react";

function ProductCard() {
  const products = [
    { id: 1, name: "Wireless Headphones", price: "129.99", inStock: true },
    { id: 2, name: "Mechanical Keyboard", price: "89.99", inStock: false },
    { id: 3, name: "Smart Watch", price: "199.99", inStock: true }
  ];

  const containerStyle = {
    padding: "40px",
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh"
  };

  const cardStyle = {
    width: "280px",
    padding: "20px",
    borderRadius: "16px",
    background: "#f8f9fb",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    marginBottom: "20px"
  };

  const stockStyle = (inStock) => ({
    padding: "8px 16px",
    borderRadius: "20px",
    fontWeight: "500",
    backgroundColor: inStock ? "#d4edda" : "#f8d7da",
    color: inStock ? "#155724" : "#721c24",
    display: "inline-block"
  });

  return (
    <div style={containerStyle}>
      <h1>Product Listing</h1>

      {products.map((product) => (
        <div key={product.id} style={cardStyle}>
          <h2>{product.name}</h2>
          <p style={{ fontWeight: "bold" }}>${product.price}</p>
          <span style={stockStyle(product.inStock)}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
