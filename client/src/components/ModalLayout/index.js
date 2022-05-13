import React from "react";
import classNames from "classnames/bind";
import styles from "./ModalLayout.module.scss";
import Header from "./Header";
import Main from "./Main";

const cx = classNames.bind(styles);

function ModalLayout() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default ModalLayout;
