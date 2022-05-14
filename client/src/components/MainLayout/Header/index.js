// import style, classname, icons
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faPlus,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

//import
// import { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <button>
            <a href='/'>Logo</a>
          </button>
        </div>
        <div className={cx("nav")}>
          <button>
            <a href='#'>Home</a>
          </button>
          <button>
            <a href='/mycocktails'>My cocktails</a>
          </button>
          <button>
            <a href='#cocktails'>Cocktails</a>
          </button>
          <button>
            <a href='#'>Filter</a>
          </button>
          {/* dropdown */}
          <button>
            More
            <div className={cx("subnav")}>
              <ul className={cx("btns")}>
                <li>
                  <button class={cx("about-btn")}>
                    <a href='#about'>About</a>
                  </button>
                </li>
                <li>
                  <button class={cx("contact-btn")}>
                    <a href='#contact'>Contact</a>
                  </button>
                </li>
              </ul>
            </div>
          </button>
        </div>
        <div className={cx("add")}>
          <button className={cx("add-btn")}>
            <a href='/add'>
              <FontAwesomeIcon icon={faPlus} />
              Add Recipe
            </a>
          </button>
        </div>
        <div className={cx("search")}>
          <input placeholder='search' spellCheck={false}></input>
          {/* <button className={cx("clear")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} /> */}

          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
