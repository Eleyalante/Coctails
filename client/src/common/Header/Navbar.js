import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import AddBtn from "./AddBtn";

function Navbar() {
  return (
    <>
      <header className='header'>
        <div className='container'>
          <div className='categories'>
            <h4>Categories</h4>
            <Categories />
          </div>
          <div className='add'>
            <AddBtn />
          </div>
          <div className='navbar'>
            <ul className='nav'>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#cocktails'>Cocktails</a>
              </li>
              {/* dropdown */}
              <li>
                More
                <div className='subnav'>
                  <ul className='btns'>
                    <li class='about-btn'>
                      <a href='#about'>About</a>
                    </li>
                    <li class='contact-btn'>
                      <a href='#contact'>Contact</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
