
import React from "react";
import Header from "./Components/Footer";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="app-root">
      <Header/>
      <main>
        <Home/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
