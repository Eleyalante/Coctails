import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlus,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function AddCocktail() {
  // --------------------getApi--------------------

  const api = "http://localhost:8080/api";

  const [posts, setPosts] = useState([]);
  const [inputFields, setInputFields] = useState([
    {
      name: "",
      recipe: "",
      ingredients: "",
      image: "",
    },
  ]);

  useEffect(() => {
    try {
      axios.get(`${api}/cocktails/all`).then((res) => {
        setPosts(res.data);
        console.log(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, [api]);
  // --------------------useState--------------------

  const handleSubmit = (e) => {
    e.preventDefault();

    const [{ name }] = inputFields;
    const [{ recipe }] = inputFields;
    const [{ ingredients }] = inputFields;
    const [{ image }] = inputFields;

    const list = {
      name: name,
      recipe: recipe,
      ingredients: ingredients,
      image: image,
    };
    const newlist = {
      name: "rest",
      recipe: "test",
      ingredients: "test",
    };
    axios
      .post(`${api}/cocktails/create`, newlist)
      .then((res) => {
        posts(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log("inputfields", inputFields);
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
        recipe: "",
        ingredients: "",
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

              <div className='recipe'>
                <p>Unit</p>
                <input
                  id='recipe'
                  name='recipe'
                  placeholder='...'
                  value={inputField.unit}
                  onChange={(event) => handleChangeInput(event, i)}
                ></input>
              </div>
              <div className='ingredients'>
                <p>ingredients</p>
                <input
                  id='ingredients'
                  name='ingredients'
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
            <a href='/addingredient'>
              Add ingredient
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </form>
        {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputFields)}</div> */}
      </div>
    </section>
  );
}

export default AddCocktail;
