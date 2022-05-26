import "./MyCocktailsPage.scss";
import ScnHeader from "../../common/ScnHeader/Header";
import React, { useEffect, useState } from "react";
import ModalList from "./ModalList";

function MyCocktailsPage({ item }) {
  const [lists, setLists] = useState([]);

  // ----------Update Modal----------
  const updateList = (itemId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setLists((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  // ----------Delete Modal----------
  const deleteList = (item) => {
    const modalItem = [...lists].filter(
      (modalItem) => modalItem.id !== item.id
    );
    setLists(modalItem);
  };
  // ----------Complete Modal----------
  const completeList = (id) => {
    let updatedList = lists.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    setLists(updatedList);
  };
  return (
    <>
      <ScnHeader />
      <section className='home-cocktail'>
        <div className='title'>
          <h3>My cocktail</h3>
          <a href='/mycocktails/trash'>Trash bin</a>
        </div>
        <div className='table'>
          <ModalList />
        </div>
      </section>
    </>
  );
}

export default MyCocktailsPage;
