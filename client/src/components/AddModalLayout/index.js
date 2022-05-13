import React from "react";
import classNames from "classnames/bind";
import styles from "./ModalLayout.module.scss";
import Header from "./Header";
import Content from "./Content";

const cx = classNames.bind(styles);

function AddModalLayout() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default AddModalLayout;
