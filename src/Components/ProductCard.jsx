import React from "react";

export default function ProductCard({ product }) {
  return (
    <article className="product-card" aria-labelledby={`title-${product.id}`}>
      <div className="product-image-wrap">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
          loading="lazy"
        />
      </div>
      <div className="product-body">
        <h2 id={`title-${product.id}`} className="product-title">
          {product.title}
        </h2>
        <p className="product-price">₹{Number(product.price).toFixed(2)}</p>
        <p className="product-desc">{product.description.slice(0, 110)}...</p>
        <div className="product-actions">
          <button className="btn btn-primary">View</button>
          <button className="btn btn-secondary" aria-label={`Add ${product.title} to cart`}>Add</button>
        </div>
      </div>
    </article>
  );
}
