import React, { useEffect, useState, useRef } from "react";
import ProductCard from "../Components/Products";
import "./Home.css";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

function Home() {
  const [products, setProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [sortOption, setSortOption] = useState("Recommended");
  const [showFilter, setShowFilter] = useState(false);
  const dropdownRef = useRef(null);

  // Sidebar dropdown state
  const [filterOpen, setFilterOpen] = useState({
    idealFor: true,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });

  // Filter checkbox selections
  const [filters, setFilters] = useState({
    idealFor: [],
    occasion: [],
    work: [],
    fabric: [],
    segment: [],
    suitableFor: [],
    rawMaterials: [],
    pattern: [],
  });

  const filterOptions = {
    idealFor: ["Men", "Women", "Baby & Kids"],
    occasion: ["Casual", "Formal", "Party", "Wedding"],
    work: ["Embroidered", "Printed", "Woven"],
    fabric: ["Cotton", "Silk", "Linen", "Wool"],
    segment: ["Luxury", "Basic", "Premium"],
    suitableFor: ["Summer", "Winter", "All Seasons"],
    rawMaterials: ["Organic", "Synthetic", "Blended"],
    pattern: ["Solid", "Striped", "Checked", "Floral"],
  };

  // Fetch products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  // Close sorting dropdown when clicking outside
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

  // Handle toggle filter section open/close
  const toggleFilterSection = (key) => {
    setFilterOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Handle checkbox change
  const handleCheckboxChange = (category, option) => {
    setFilters((prev) => {
      const isSelected = prev[category].includes(option);
      return {
        ...prev,
        [category]: isSelected
          ? prev[category].filter((item) => item !== option)
          : [...prev[category], option],
      };
    });
  };

  // Handle "Unselect All" click
  const unselectAll = (category) => {
    setFilters((prev) => ({ ...prev, [category]: [] }));
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
          <button
            className="hide-filter"
            onClick={() => setShowFilter(!showFilter)}
          >
            {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
          </button>
        </div>

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
                      sortOption === option
                        ? "active-option"
                        : "inactive-option"
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

      {/* ---------- Main Content ---------- */}
      <div className="content-area">
        {/* ---------- Sidebar ---------- */}
        {showFilter && (
          <aside className="filter-sidebar">
            <h3>Filters</h3>

            {/* Generate each dropdown filter section */}
            {Object.keys(filterOptions).map((category) => (
              <div className="filter-section" key={category}>
                <div
                  className="filter-header"
                  onClick={() => toggleFilterSection(category)}
                >
                  <h4>{category.replace(/([A-Z])/g, " $1").toUpperCase()}</h4>
                  {filterOpen[category] ? <ChevronUp /> : <ChevronDown />}
                </div>

                {filterOpen[category] && (
                  <div className="filter-options">
                    <button
                      className="unselect-btn"
                      onClick={() => unselectAll(category)}
                    >
                      Unselect all
                    </button>

                    {filterOptions[category].map((option) => (
                      <label key={option}>
                        <input
                          type="checkbox"
                          checked={filters[category].includes(option)}
                          onChange={() =>
                            handleCheckboxChange(category, option)
                          }
                        />{" "}
                        {option}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </aside>
        )}

        {/* ---------- Product Grid ---------- */}
        <div className={`product-grid ${showFilter ? "shrink" : ""}`}>
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
