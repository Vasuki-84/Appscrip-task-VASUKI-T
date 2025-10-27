import React from "react";

import "./styles/global.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app-root">
      {/* Top Navbar */}
      <Header/>

      {/* Main content layout */}
      <div className="main-layout">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Right Main Page */}
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
