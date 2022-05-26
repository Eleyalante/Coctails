import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import IngredientsModal from "./IngredientsModal";

function IngredientListItem({ item, deleteModalProp }) {
  const deleteModal = () => deleteModalProp(item);
  return (
    <>
      <IngredientsModal deleteButton={deleteModal} />
      <div>{item.amount}</div>
      <div>{item.unit}</div>
      <div>{item.ingredient}</div>
      <div>{item.note}</div>
    </>
  );
}

export default IngredientListItem;
