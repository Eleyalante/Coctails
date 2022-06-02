import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

function AddForm() {
  const url = "http://localhost:8080/api/ingredients/all";

  // --------------------useState--------------------
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

  // --------------------handleSubmit--------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputFields, inputMain);
    // console.log("InputMain", inputMain);
  };

  const handleSubmitAdd = (e) => {
    e.preventDefault();
    const newInput = {
      title: inputMain.title,
      source: inputMain.source,
      amount: inputFields.amount,
      unit: inputFields.unit,
      ingredient: inputFields.ingredient,
      note: inputFields.note,

      inputFields,
      inputMain,
      header: { "Access-Control-Allow-Origin": "*" },
    };

    fetch("http://localhost:8080/api/ingredients/all", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newInput),
    })
      .then(() => {
        console.log("new ingredient added");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // --------------------handleChangeInput--------------------
  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });
    const newInputMain = inputMain.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
    setInputMain(newInputMain);
  };
  // const handleChangeInputMain = (id, event) => {
  //   const newInputMain = inputMain.map((i) => {
  //     if (id === i.id) {
  //       i[event.target.name] = event.target.value;
  //     }
  //     return i;
  //   });

  //   setInputMain(newInputMain);
  // };

  // --------------------handleFunction--------------------
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
                onChange={(event) => handleChangeInput(inputMain.id, event)}
                // onChange={(e) => handle(e)}
              ></input>
              <p>Source</p>
              <input
                name='source'
                className='source'
                placeholder='...'
                value={inputMain.source}
                onChange={(event) => handleChangeInput(inputMain.id, event)}
              ></input>
            </div>
          ))}
          {/* <form onSubmit={handleSubmitAdd}> */}
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

          <button
            className='save-btn'
            variant='contained'
            type='submit'
            onClick={handleSubmitAdd}
          >
            {/* <Link to='/mycocktails'> */}
            Save recipe
            {/* </Link> */}
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddForm;
