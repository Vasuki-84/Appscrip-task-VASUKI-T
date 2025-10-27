import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";


export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch from FakeStoreAPI
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <section className="container home-section">
      <header className="page-header">
        <h1>Product Listing</h1>
        <p className="lead">A responsive product listing mockup for the Appscrip frontend assignment.</p>
      </header>

      <section id="products" aria-live="polite">
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <div className="product-grid" role="list">
            {products.map((p) => (
              <div role="listitem" key={p.id}>
                <ProductCard product={p}  />
              </div>
            ))}
          </div>
        )}
      </section>
    </section>
  );
}
