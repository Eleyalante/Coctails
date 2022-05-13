import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("back-btn")}>
          <a href='/'>
            <FontAwesomeIcon icon={faChevronLeft} />
            Home Page
          </a>
        </div>
        <div className={cx("logo")}>
          <button>
            <a href='/'>Logo</a>
          </button>
          My Added Recipes
        </div>
      </div>
    </header>
  );
}

export default Header;
