import React from "react";

import "./styles/global.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app-root">
      {/* Top Navbar */}
      <Header/>

   
      <div className="main-layout">
  
        <main className="content-area">
          <Home/>
        </main>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;
