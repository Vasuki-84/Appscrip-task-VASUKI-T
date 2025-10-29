import React, { useState } from "react";
import { Heart } from "lucide-react";
import "../Pages/Home.css";
import "../styles/Products.css";

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);

  const isNew = product.id % 2 === 0;
  const isOutOfStock = product.id % 3 === 0;

  return (
    <div className="product-card">
      {/* NEW PRODUCT and OUT OF STOCK tags */}
      {isNew && <div className="new-product">NEW PRODUCT</div>}
      {isOutOfStock && <div className="out-of-stock">OUT OF STOCK</div>}

      {/* Heart icon */}
      <div
        className={`like-btn ${liked ? "liked" : ""}`}
        onClick={() => setLiked(!liked)}
      >
        <Heart size={16} fill={liked ? "#e11d48" : "none"} color="#e11d48" />
      </div>

      {/* Product image */}
      <img src={product.image} alt={product.title} />

      {/* Product info */}
      <div className="product-info">
        <h2>{product.title.slice(0, 22)}...</h2>
        <div className="text">
          <p className="signin-text">Sign in</p>
          <p>   or create account to see pricing</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
