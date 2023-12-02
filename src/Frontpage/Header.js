import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
export default function Header() {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <div>

<nav>
    <div className="navbar">
      <div className="logo"><a href="/"> Meal Rescue India </a></div>
      <ul className="menu">
        <li><a href="/">Home</a></li>
        <li><a href="/getsupport">Our Centers</a></li>
        <li><a href="/donatelogin">Donate</a></li>
        <li><a href="/contact">Contact Us </a></li>
        <li><a href="/admin">Administrator Panel</a></li>
      </ul>
    </div>
  </nav>
  
  <div className="button">
    <button onClick={scrollToTop}>↑</button>
  </div>
    </div>
  )
}
