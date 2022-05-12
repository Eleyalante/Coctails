import React from "react";
import classNames from "classnames/bind";
import styles from "./Sidebar.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <aside className={cx("wrapper")}>
      <h2>Footer</h2>
    </aside>
  );
}

export default Footer;
