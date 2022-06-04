import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlus,
  faArrowRight,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function AddIngredient() {
  // --------------------getApi--------------------

  const api = "http://localhost:8080/api";

  const [posts, setPosts] = useState([]);
  const [inputFields, setInputFields] = useState([
    {
      name: "",
      unit: "",
      image: "",
    },
  ]);
  // --------------------useState--------------------

  const handleSubmit = (e) => {
    e.preventDefault();
    inputFields.map((item, index) => {
      axios
        .post(`${api}/ingredients/create`, item)
        .then((res) => {
          setPosts(res);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  // --------------------handleChangeInput--------------------
  const handleChangeInput = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  };

  // --------------------handleFunction--------------------
  const handleAddFields = (e) => {
    e.preventDefault();

    setInputFields([
      ...inputFields,
      {
        name: "",
        unit: "",
        image: "",
      },
    ]);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };
  return (
    <section className='homeAdd'>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          {inputFields.map((inputField, i) => (
            <div key={inputField.id} className='form'>
              <div className='name'>
                <p>Name</p>
                <input
                  id='name'
                  name='name'
                  placeholder='...'
                  value={inputField.name}
                  onChange={(event) => handleChangeInput(event, i)}
                ></input>
              </div>

              <div className='unit'>
                <p>Unit</p>
                <input
                  id='unit'
                  name='unit'
                  placeholder='...'
                  value={inputField.unit}
                  onChange={(event) => handleChangeInput(event, i)}
                ></input>
              </div>
              <div className='image'>
                <p>Image</p>
                <input
                  id='image'
                  name='image'
                  type='file'
                  placeholder='...'
                  value={inputField.image}
                  onChange={(event) => handleChangeInput(event, i)}
                ></input>
              </div>

              <button
                disabled={inputFields.length === 1}
                onClick={() => handleRemoveFields(i)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button className='add-btn' onClick={handleAddFields}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          ))}

          <div className='save-btn'>
            <button>Save recipe</button>
          </div>
          <div className='show-btn'>
            <a href='/ingredient'>
              Your added ingredients
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
          <div className='show-btn'>
            <a href='/cocktail'>
              Your added cocktails
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
          <div className='back-btn'>
            <a href='/addcocktail'>
              Back
              <FontAwesomeIcon icon={faBackward} />
            </a>
          </div>
        </form>
        <div style={{ marginTop: 20 }}>{JSON.stringify(inputFields)}</div>
      </div>
    </section>
  );
}

export default AddIngredient;
