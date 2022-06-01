import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

function AddForm() {
  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      amount: "",
      unit: "",
      ingredient: "",
      note: "",
    },
  ]);
  const [inputMain, setInputMain] = useState([
    {
      id: uuidv4(),
      title: "",
      source: "",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
    console.log("InputMain", inputMain);
  };
  const handleSubmitAdd = (e) => {
    e.preventDefault();
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };
  const handleChangeInputMain = (id, event) => {
    const newInputMain = inputMain.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputMain(newInputMain);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      {
        id: uuidv4(),
        amount: "",
        unit: "",
        ingredient: "",
        note: "",
      },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };
  return (
    <section className='homeAdd'>
      <div className='container'>
        <form onSubmit={handleSubmitAdd}>
          {inputMain.map((inputMain) => (
            <div key={inputMain.id} className='header-form'>
              <p>Title</p>
              <input
                name='title'
                className='title'
                placeholder='...'
                value={inputMain.title}
                onChange={(event) => handleChangeInputMain(inputMain.id, event)}
              ></input>
              <p>Source</p>
              <input
                name='source'
                className='source'
                placeholder='...'
                value={inputMain.source}
                onChange={(event) => handleChangeInputMain(inputMain.id, event)}
              ></input>
            </div>
          ))}
        </form>
        <form onSubmit={handleSubmitAdd}>
          {inputFields.map((inputField) => (
            <div key={inputField.id} className='ingredients-form'>
              <div>
                <p>Amount</p>
                <input
                  name='amount'
                  label='Amount'
                  variant='filled'
                  className='amount'
                  placeholder='...'
                  // variant='filled'
                  value={inputField.amount}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                ></input>
              </div>
              <div>
                <p>Unit</p>
                <input
                  name='unit'
                  label='Amount'
                  variant='filled'
                  className='unit'
                  placeholder='...'
                  value={inputField.unit}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                ></input>
              </div>
              <div>
                <p>Ingredient</p>
                <input
                  name='ingredient'
                  label='Ingredient'
                  variant='filled'
                  className='ingredient'
                  placeholder='...'
                  value={inputField.ingredient}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                ></input>
              </div>
              <div>
                <p>Note</p>
                <input
                  name='note'
                  label='Note'
                  variant='filled'
                  className='note'
                  placeholder='...'
                  value={inputField.note}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                ></input>
              </div>
              <button
                disabled={inputFields.length === 1}
                onClick={() => handleRemoveFields(inputField.id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button className='add-btn' onClick={handleAddFields}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          ))}
        </form>
        <button
          className='save-btn'
          variant='contained'
          type='submit'
          onClick={handleSubmit}
        >
          Save recipe
        </button>
      </div>
    </section>
  );
}

export default AddForm;
