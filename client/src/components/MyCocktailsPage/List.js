import React from "react";

function List({ item }) {
  return (
    <>
      <div>{item.amount}</div>
      <div>{item.unit}</div>
      <div>{item.ingredient}</div>
      <div>{item.note}</div>
    </>
  );
}

export default List;
