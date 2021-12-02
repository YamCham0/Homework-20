import React from "react";
import ReactDOM from "react-dom";
import PortfolioContainer from "./components/PortfolioContainer";
import ContactUs from "./components/pages/Contact2";
import Footer from "./components/pages/Footer";
import  "./App.css";





function App() {
    return (
    <div className="page-container">
    <div className="content-wrap">
        <PortfolioContainer />
        <ContactUs/>
    </div>
        <Footer />
    </div>
    );
  }

// TODO Footer with Social Media Icon Links
export default App;


