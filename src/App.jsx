import React from "react";

import "./styles/global.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="main-layout">
        <Sidebar />
        <div className="content">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
            posuere rhoncus scelerisque.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
