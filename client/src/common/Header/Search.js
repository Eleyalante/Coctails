import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <section className='search'>
      <div className='container'>
        <div className='logo'>
          <button>
            <a href='/'>
              <img src='/images/Logo.jpg' alt='logo'></img>
            </a>
          </button>
        </div>
        <div className='search-box'>
          <div className='container'>
            <input placeholder='search' spellCheck={false}></input>
            <button className='search-btn'>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;
