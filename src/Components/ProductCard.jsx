import React from "react";
import "../Pages/Home"; // reuse same CSS


const ProductCard = ({ product }) => {
  const isNew = product.id % 2 === 0;
  const isOutOfStock = product.id % 3 === 0;

  return (
    <div className="product-card">
      {isNew && <div className="new-product">NEW PRODUCT</div>}
      {isOutOfStock && <div className="out-of-stock">OUT OF STOCK</div>}

      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <h2>{product.title.slice(0, 22)}...</h2>
        <p>₹{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
