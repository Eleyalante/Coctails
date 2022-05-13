import styles from "./Main.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Content() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("title")}>
          <p>Title</p>
          <input placeholder='...' spellCheck={false}></input>
        </div>
        <div className={cx("source")}>
          <p>Source</p>
          <input placeholder='...' spellCheck={false}></input>
        </div>

        {/* /////////////////////////////ingredients modal///////////////////////////// */}
        <div className={cx("ingredients")}>
          <div className={cx("amount")}>
            <p>Amount</p>
            <input placeholder='...' spellCheck={false}></input>
          </div>
          <div className={cx("unit")}>
            <p>Unit</p>
            <input placeholder='...' spellCheck={false}></input>
          </div>
          <div className={cx("ingredient")}>
            <p>Ingredient</p>
            <input placeholder='...' spellCheck={false}></input>
          </div>
          <div className={cx("note")}>
            <p>Note</p>
            <input placeholder='...' spellCheck={false}></input>
            <button className={cx("delete-btn")}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
        <div className={cx("ingredients")}>
          <div className={cx("amount")}>
            <p>Amount</p>
            <input placeholder='...' spellCheck={false}></input>
          </div>
          <div className={cx("unit")}>
            <p>Unit</p>
            <input placeholder='...' spellCheck={false}></input>
          </div>
          <div className={cx("ingredient")}>
            <p>Ingredient</p>
            <input placeholder='...' spellCheck={false}></input>
          </div>
          <div className={cx("note")}>
            <p>Note</p>
            <input placeholder='...' spellCheck={false}></input>
            <button className={cx("delete-btn")}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
        <div className={cx("ingredients")}>
          <div className={cx("amount")}>
            <p>Amount</p>
            <input placeholder='...' spellCheck={false}></input>
          </div>
          <div className={cx("unit")}>
            <p>Unit</p>
            <input placeholder='...' spellCheck={false}></input>
          </div>
          <div className={cx("ingredient")}>
            <p>Ingredient</p>
            <input placeholder='...' spellCheck={false}></input>
          </div>
          <div className={cx("note")}>
            <p>Note</p>
            <input placeholder='...' spellCheck={false}></input>
            <button className={cx("delete-btn")}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
        <div className={cx("ingredients")}>
          <div className={cx("amount")}>
            <p>Amount</p>
            <input placeholder='...' spellCheck={false}></input>
          </div>
          <div className={cx("unit")}>
            <p>Unit</p>
            <input placeholder='...' spellCheck={false}></input>
          </div>
          <div className={cx("ingredient")}>
            <p>Ingredient</p>
            <input placeholder='...' spellCheck={false}></input>
          </div>
          <div className={cx("note")}>
            <p>Note</p>
            <input placeholder='...' spellCheck={false}></input>
            <button className={cx("delete-btn")}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
        <div className={cx("ingredients")}>
          <div className={cx("amount")}>
            <p>Amount</p>
            <input placeholder='...' spellCheck={false}></input>
          </div>
          <div className={cx("unit")}>
            <p>Unit</p>
            <input placeholder='...' spellCheck={false}></input>
          </div>
          <div className={cx("ingredient")}>
            <p>Ingredient</p>
            <input placeholder='...' spellCheck={false}></input>
          </div>
          <div className={cx("note")}>
            <p>Note</p>
            <input placeholder='...' spellCheck={false}></input>
            <button className={cx("delete-btn")}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
        <div className={cx("ingredients")}>
          <div className={cx("amount")}>
            <p>Amount</p>
            <input placeholder='...' spellCheck={false}></input>
          </div>
          <div className={cx("unit")}>
            <p>Unit</p>
            <input placeholder='...' spellCheck={false}></input>
          </div>
          <div className={cx("ingredient")}>
            <p>Ingredient</p>
            <input placeholder='...' spellCheck={false}></input>
          </div>
          <div className={cx("note")}>
            <p>Note</p>
            <input placeholder='...' spellCheck={false}></input>
            <button className={cx("delete-btn")}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
        <div className={cx("ingredients")}>
          <div className={cx("amount")}>
            <p>Amount</p>
            <input placeholder='...' spellCheck={false}></input>
          </div>
          <div className={cx("unit")}>
            <p>Unit</p>
            <input placeholder='...' spellCheck={false}></input>
          </div>
          <div className={cx("ingredient")}>
            <p>Ingredient</p>
            <input placeholder='...' spellCheck={false}></input>
          </div>
          <div className={cx("note")}>
            <p>Note</p>
            <input placeholder='...' spellCheck={false}></input>
            <button className={cx("delete-btn")}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
        {/* ////////////////////////////////////////////////////////// */}

        <div className={cx("save-btn")}>
          <button>
            <a href='/myrecipes'>Add recipe</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content;
