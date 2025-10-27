import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [sortOption, setSortOption] = useState("Recommended");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const handleSortChange = (option) => {
    setSortOption(option);
    setShowDropdown(false);
  };

  return (
    <div className="home-page">
      {/* Intro */}
      <section className="intro">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque.
        </p>
      </section>

      {/* Toolbar */}
      <div className="product-toolbar">
        <div className="left-toolbar">
          <span className="item-count">3425 ITEMS</span>
          <button className="hide-filter">HIDE FILTER</button>
        </div>

        <div className="right-toolbar">
          <div
            className="dropdown-wrapper"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <span>{sortOption} ▼</span>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li onClick={() => handleSortChange("Recommended")}>
                  Recommended
                </li>
                <li onClick={() => handleSortChange("Newest First")}>
                  Newest First
                </li>
                <li onClick={() => handleSortChange("Price: Low to High")}>
                  Price: Low to High
                </li>
                <li onClick={() => handleSortChange("Price: High to Low")}>
                  Price: High to Low
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="product-grid">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
