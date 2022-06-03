import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
function AddBtn() {
  return (
    <div className='add-btn'>
      <button className='add-box'>
        <a href='/addcocktail'>
          <FontAwesomeIcon icon={faPlus} />
          Add Recipe
        </a>
      </button>
    </div>
  );
}

export default AddBtn;
