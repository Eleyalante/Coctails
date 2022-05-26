import React from "react";
import "./AddPage.scss";
import ScnHeader from "../../common/ScnHeader/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
function AddPage() {
  return (
    <>
      <ScnHeader />
      <section className='homeAdd'>
        <div className='container'>
          <div className='title'>
            <p>Title</p>
            <input placeholder='...' spellCheck={false}></input>
          </div>
          <div className='source'>
            <p>Source</p>
            <input placeholder='...' spellCheck={false}></input>
          </div>

          {/* /////////////////////////////ingredients modal///////////////////////////// */}
          <div className='ingredients'>
            <div className='amount'>
              <p>Amount</p>
              <input placeholder='...' spellCheck={false}></input>
            </div>
            <div className='unit'>
              <p>Unit</p>
              <input placeholder='...' spellCheck={false}></input>
            </div>
            <div className='ingredient'>
              <p>Ingredient</p>
              <input placeholder='...' spellCheck={false}></input>
            </div>
            <div className='note'>
              <p>Note</p>
              <input placeholder='...' spellCheck={false}></input>
              <button className='delete-btn'>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
          <div className='add-btn'>
            <button>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>

          {/* <div className='ingredients'>
            <div className='amount'>
              <p>Amount</p>
              <input placeholder='...' spellCheck={false}></input>
            </div>
            <div className='unit'>
              <p>Unit</p>
              <input placeholder='...' spellCheck={false}></input>
            </div>
            <div className='ingredient'>
              <p>Ingredient</p>
              <input placeholder='...' spellCheck={false}></input>
            </div>
            <div className='note'>
              <p>Note</p>
              <input placeholder='...' spellCheck={false}></input>
              <button className='delete-btn'>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
          <div className='ingredients'>
            <div className='amount'>
              <p>Amount</p>
              <input placeholder='...' spellCheck={false}></input>
            </div>
            <div className='unit'>
              <p>Unit</p>
              <input placeholder='...' spellCheck={false}></input>
            </div>
            <div className='ingredient'>
              <p>Ingredient</p>
              <input placeholder='...' spellCheck={false}></input>
            </div>
            <div className='note'>
              <p>Note</p>
              <input placeholder='...' spellCheck={false}></input>
              <button className='delete-btn'>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
          <div className='ingredients'>
            <div className='amount'>
              <p>Amount</p>
              <input placeholder='...' spellCheck={false}></input>
            </div>
            <div className='unit'>
              <p>Unit</p>
              <input placeholder='...' spellCheck={false}></input>
            </div>
            <div className='ingredient'>
              <p>Ingredient</p>
              <input placeholder='...' spellCheck={false}></input>
            </div>
            <div className='note'>
              <p>Note</p>
              <input placeholder='...' spellCheck={false}></input>
              <button className='delete-btn'>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
          <div className='ingredients'>
            <div className='amount'>
              <p>Amount</p>
              <input placeholder='...' spellCheck={false}></input>
            </div>
            <div className='unit'>
              <p>Unit</p>
              <input placeholder='...' spellCheck={false}></input>
            </div>
            <div className='ingredient'>
              <p>Ingredient</p>
              <input placeholder='...' spellCheck={false}></input>
            </div>
            <div className='note'>
              <p>Note</p>
              <input placeholder='...' spellCheck={false}></input>
              <button className='delete-btn'>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
          <div className='ingredients'>
            <div className='amount'>
              <p>Amount</p>
              <input placeholder='...' spellCheck={false}></input>
            </div>
            <div className='unit'>
              <p>Unit</p>
              <input placeholder='...' spellCheck={false}></input>
            </div>
            <div className='ingredient'>
              <p>Ingredient</p>
              <input placeholder='...' spellCheck={false}></input>
            </div>
            <div className='note'>
              <p>Note</p>
              <input placeholder='...' spellCheck={false}></input>
              <button className='delete-btn'>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
          <div className='ingredients'>
            <div className='amount'>
              <p>Amount</p>
              <input placeholder='...' spellCheck={false}></input>
            </div>
            <div className='unit'>
              <p>Unit</p>
              <input placeholder='...' spellCheck={false}></input>
            </div>
            <div className='ingredient'>
              <p>Ingredient</p>
              <input placeholder='...' spellCheck={false}></input>
            </div>
            <div className='note'>
              <p>Note</p>
              <input placeholder='...' spellCheck={false}></input>
              <button className='delete-btn'>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div> */}
          {/* ////////////////////////////////////////////////////////// */}

          <div className='save-btn'>
            <button>
              <a href='/mycocktails'>Save recipe</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddPage;
