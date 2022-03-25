//import logo from './logo.svg';
import "./App.css";
// import Login from './authentication/Login';
// import Header from './MyComponents/Header';
// import Test from './components/Test';
import Footer from "./MyComponents/Footer";
import React from 'react'
import Header from "./MyComponents/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";


function App() {
 
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home/>} />
        
         
         <Route path="/about" element={<About />} />
      </Routes>

      {/* <Login chekVar={true}/>  */}
      {/* <Test/>
    <Header title2={4} title3={true}/>*/}

      <Footer />
    </Router>
  );
}

export default App;
