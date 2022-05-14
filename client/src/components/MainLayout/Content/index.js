import React from "react";
import classNames from "classnames/bind";
import styles from "./Content.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Content() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div id='home' className={cx("home-section")}>
          <div className={cx("home-header")}>Home</div>
        </div>
        <div id='about' className={cx("about-section")}>
          <div className={cx("about-header")}>About</div>
          <div className={cx("about-content")}>
            <p>
              Through analysis of satellite imagery in collaboration with the
              Centre for Information Resilience (CIR) and on-the-ground
              investigations, CNN has identified the rocket artillery brigade
              that launched the cluster munitions attack in residential
              districts of Ukraine's second city on the day Kiriukhina and her
              neighbors were attacked. That brigade reports directly to same
              military leader -- Colonel General Alexander Zhuravlyov -- who
              oversaw one of the most brutal chapters of Syria's war.
            </p>
          </div>
        </div>
        <div id='cocktails' className={cx("cocktails-section")}>
          <div className={cx("cocktails-header")}>Cocktails</div>
        </div>
        <div id='contact' className={cx("contact-section")}>
          <div className={cx("contact-header")}>Contact</div>
          <div className={cx("contact-content")}>
            <p>
              <FontAwesomeIcon icon={faLocationDot} />
              London, UK
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} />
              Phone: +000 123456789
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />
              Email: mail@mail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
