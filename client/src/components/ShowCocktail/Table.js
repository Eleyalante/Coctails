import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import DeleteModal from "../../common/DeleteModal";
const url = "http://localhost:8080/api";

function Table() {
  const [api, setApi] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  let content = null;

  useEffect(() => {
    try {
      axios.get(`${url}/cocktails/all`).then((res) => {
        setApi(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, [url]);
  const handleRemoveFields = (id, e) => {
    setModalOpen(true);
    axios
      .delete(`${url}/cocktails/delete?id=${id}`)
      .then(() => {
        // res = values;
        // values?.splice(post.id, 1);
        // setApi(values);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (api) {
    content = (
      <section className='home-show'>
        <table className='table'>
          <thead className='table-head'>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Recipe</th>
              <th>Ingredient</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className='table-body'>
            {api.data?.map((item, index) => (
              <tr key={index}>
                <th>{index}</th>
                <th>{item.name}</th>
                <th>{item.Recipe}</th>
                <th>{item.Ingredient}</th>
                <th>{item.image}</th>
                <th>
                  <button
                    // disabled={inputFields.length === 1}
                    onClick={() => handleRemoveFields(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        {/* {modalOpen && <DeleteModal setOpenModal={setModalOpen} />} */}
      </section>
    );
  }

  return <div>{content}</div>;
}

export default Table;
