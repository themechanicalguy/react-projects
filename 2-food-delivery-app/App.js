import React from "react";
import logo from "./public/resources/img/logo.jpg";

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">{/* Resturant Cards */}</div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items">
        <ul className="nav-links">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
