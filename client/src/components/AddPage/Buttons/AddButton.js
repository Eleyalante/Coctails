import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function AddButton({ addModalprop }) {
  const [amount, setAmount] = useState("");
  const [unit, setUnit] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addModalprop({
      id: new Date().getTime(),
      amount,
      unit,
      ingredient,
      note,
    });
    setAmount("");
    setUnit("");
    setIngredient("");
    setNote("");
  };
  return (
    <>
      <button onClick={handleSubmit}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </>
  );
}

export default AddButton;
