import styles from "./Main.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Main() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}></div>
    </div>
  );
}

export default Main;
