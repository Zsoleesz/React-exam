import React from 'react';
import Logo from  "../components/Logo";
import Navbar from  "../components/Navbar";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="homeContainer">
       <Logo />
       <Navbar />
    </div>
 
  )
}

export default Home