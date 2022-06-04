import React, { useState, useEffect } from "react";
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
      ingredients: [
        {
          ingredient: "",
          amount: "",
        },
      ],
      image: "",
    },
  ]);
  // ----------------------------------------

  useEffect(() => {
    try {
      axios.get(`${api}/ingredients/all`).then((res) => {
        setPosts(res.data);
        console.log(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, [api]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newlist = {
      name: "test_add_ingred53453",
      image: "test_img",
      recipe: "recipe",
      ingredients: [
        {
          ingredient: "6299ffc34d9f84dd9d293280",
          amount: 1,
        },
      ],
    };

    // inputFields.map((item, index) => {
    axios
      .post(`${api}/cocktails/create`, newlist)
      .then((res) => {
        setPosts(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // });
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
        ingredients: [
          {
            ingredient: "",
            amount: "",
          },
        ],
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
                <p>Recipe</p>
                <input
                  id='recipe'
                  name='recipe'
                  placeholder='...'
                  value={inputField.unit}
                  onChange={(event) => handleChangeInput(event, i)}
                ></input>
              </div>
              <div className='ingredients'>
                <p>Ingredient</p>
                <input
                  id='ingredient'
                  name='ingredient'
                  placeholder='...'
                  value={inputField.unit}
                  onChange={(event) => handleChangeInput(event, i)}
                ></input>
              </div>
              <div className='ingredients'>
                <p>Amount</p>
                <input
                  id='amount'
                  name='ingredient'
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
        <div style={{ marginTop: 20 }}>{JSON.stringify(inputFields)}</div>
      </div>
    </section>
  );
}

export default AddCocktail;
