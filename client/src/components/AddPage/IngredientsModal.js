import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function IngredientsModal({ deleteButton }) {
  const [amount, setAmount] = useState("");
  const [unit, setUnit] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [note, setNote] = useState("");

  // ----------HandleChange----------
  const handleChangeA = (e) => {
    setAmount(e.target.value);
  };
  const handleChangeU = (e) => {
    setUnit(e.target.value);
  };
  const handleChangeI = (e) => {
    setIngredient(e.target.value);
  };
  const handleChangeN = (e) => {
    setNote(e.target.value);
  };

  return (
    <>
      <form>
        <div className='amount'>
          <p>Amount</p>
          <input
            placeholder='...'
            spellCheck={false}
            value={amount}
            onChange={handleChangeA}
          ></input>
        </div>
        <div className='unit'>
          <p>Unit</p>
          <input
            placeholder='...'
            spellCheck={false}
            value={unit}
            onChange={handleChangeU}
          ></input>
        </div>
        <div className='ingredient'>
          <p>Ingredient</p>
          <input
            placeholder='...'
            spellCheck={false}
            value={ingredient}
            onChange={handleChangeI}
          ></input>
        </div>
        <div className='note'>
          <p>Note</p>
          <input
            placeholder='...'
            spellCheck={false}
            value={note}
            onChange={handleChangeN}
          ></input>
        </div>
        <div className='delete-btn'>
          <button onClick={deleteButton}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </form>
    </>
  );
}

export default IngredientsModal;
