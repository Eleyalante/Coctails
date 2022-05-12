import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <button>
            <h1>Logo</h1>
          </button>
        </div>
        <div className={cx("nav")}>
          <button>Home</button>
          <button>About</button>
          <button>Recipes</button>
          <button>Contact</button>
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
