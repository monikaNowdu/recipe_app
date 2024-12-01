import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img
          src="https://res.cloudinary.com/duxfqpbkj/image/upload/v1732515065/bibimbap_r4rom9.png"
          alt="Logo"
          className="navbar-logo"
        />
        <h1 className="navbar-heading">Recipes App</h1>
      </div>
      <ul className="navbar-right">
        <li>
          <Link to="/health-recipes">Healthy Recipes</Link>
        </li>
        <li>
          <Link to="/fast-foods">Fast Food</Link> {/* Fast Food Link */}
        </li>
        <li>
          <Link to="/add">Add Recipe</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
