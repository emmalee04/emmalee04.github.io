import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { BiCoffeeTogo } from "react-icons/bi";
import { CiMenuBurger } from "react-icons/ci";
import data from '../../data/data';

// Main navigation bar with app logo and page links
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className={'navbar flex flex-sb'} id='navbar'>
      <div className='navbar-content flex flex-c'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to={data.pages[0].path} className='navbar-brand flex'>
            <span className='text-uppercase fs-13'>{data.title}</span>
            <BiCoffeeTogo size={15}/>
          </Link>
          <button type='button' className='navbar-toggler-btn' onClick={handleNavbar}>
            <CiMenuBurger size = {30} />
          </button>
        </div>

        <div className={toggleMenu ? 'navbar-collapse show-navbar-collapse' : 'navbar-collapse'}>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to={data.pages[0].path} className='nav-link text-uppercase fs-13' onClick={handleNavbar}>
                {data.pages[0].nav}</Link>
            </li>
            <li className='nav-item'>
              <Link to={data.pages[1].path} className='nav-link text-uppercase fs-13'>
                {data.pages[1].nav}</Link>
            </li>
            <li className='nav-item'>
              <Link to={data.pages[2].path} className='nav-link text-uppercase fs-13'>
                {data.pages[2].nav}</Link>
            </li>
            <li className='nav-item'>
              <Link to={data.pages[3].path} className='nav-link text-uppercase fs-13'>
                {data.pages[3].nav}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  ) 
}

export default Navbar