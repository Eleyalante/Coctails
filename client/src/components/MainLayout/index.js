import classNames from "classnames/bind";
import styles from "./Layout.module.scss";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";

const cx = classNames.bind(styles);

function MainLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        {/* <Sidebar /> */}
        <div className={cx("content")}>
          <Content />
          {/* {children} */}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
