import React, { useEffect, useState, useRef } from "react";
import ProductCard from "../Components/ProductCard";
import "./Home.css";
import { Check } from "lucide-react";

function Home() {
  const [products, setProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [sortOption, setSortOption] = useState("Recommended");
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const options = [
    "Recommended",
    "Newest First",
    "Popular",
    "Price : High to Low",
    "Price : Low to High",
  ];

  const handleSortChange = (option) => {
    setSortOption(option);
    setShowDropdown(false);
  };

  return (
    <div className="home-page">
      <section className="intro">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque.
        </p>
      </section>

      {/* ---------- Toolbar ---------- */}
      <div className="product-toolbar">
        <div className="toolbar-left">
          <span className="item-count">3425 ITEMS</span>
          <button className="hide-filter">HIDE FILTER</button>
        </div>

        {/* Dropdown aligned to right */}
        <div className="toolbar-right" ref={dropdownRef}>
          <div
            className="dropdown-wrapper"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <span className="dropdown-label">{sortOption.toUpperCase()} ▼</span>

            {showDropdown && (
              <ul className="dropdown-menu">
                {options.map((option) => (
                  <li
                    key={option}
                    onClick={() => handleSortChange(option)}
                    className={
                      sortOption === option ? "active-option" : "inactive-option"
                    }
                  >
                    {sortOption === option && <Check size={14} />} {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* ---------- Product Grid ---------- */}
      <div className="product-grid">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
