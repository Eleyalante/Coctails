import React, { useEffect, useState } from "react";
import "./AddPage.scss";
import ScnHeader from "../../common/ScnHeader/Header";
import SaveButton from "./Buttons/SaveButton";
import AddButton from "./Buttons/AddButton";
// import DeleteButton from "./Buttons/DeleteButton";
import IngredientsModal from "./IngredientsModal";
import IngredientListItem from "./IngredientListItem";
import MainModal from "./MainModal";

function AddPage() {
  const [modals, setModals] = useState([]);

  // ----------Add Modal----------
  const addModal = (modal) => {
    // if (!modal.text || /^\s*$/.test(modal.text)) {
    //   return;
    // }
    const newModal = [...modals, modal];
    setModals(newModal);
  };

  // ----------Delete Modal----------
  const deleteModal = (modal) => {
    const modalItem = [...modals].filter(
      (modalItem) => modalItem.id !== modal.id
    );
    setModals(modalItem);
  };

  return (
    <>
      <ScnHeader />
      <section className='homeAdd'>
        <div className='container'>
          {/* ----------Main Modal---------- */}
          <div className='main-modal'>
            <MainModal />
          </div>
          <div className='add-btn'>
            <AddButton addModalprop={addModal} />
          </div>
          {/* ----------Ingredient Modal---------- */}
          <div className='ingredients-modal'>
            <IngredientsModal addModalprop={addModal} />
            {modals.map((modal) => (
              <IngredientListItem
                key={modal.id}
                item={modal}
                deleteModalProp={deleteModal}
              />
            ))}
          </div>

          {/* ----------Save Button---------- */}
          <div className='save-btn'>
            <SaveButton />
          </div>
        </div>
      </section>
    </>
  );
}

export default AddPage;
