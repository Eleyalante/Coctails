import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
const url = "http://localhost:8080/api";

function Table(list, colNames) {
  const [api, setApi] = useState([]);
  const [posts, setPosts] = useState([]);
  const [inputFields, setInputFields] = useState([
    {
      name: "",
      unit: "",
      image: "",
    },
  ]);
  useEffect(() => {
    try {
      axios.get(`${url}/ingredients/all`).then((res) => {
        setApi(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, [url]);
  // console.log(api);

  // --------------------------------------REMOVE---------------------------
  const handleRemoveFields = (id, e) => {
    // const values = post;
    axios
      .delete(`${url}/ingredients/delete?id=${id}`)
      .then((res) => {
        // res = values;
        // values?.splice(post.id, 1);
        // setApi(values);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let content = null;

  if (api) {
    content = (
      <section className='home-show'>
        <table className='table'>
          <thead className='table-head'>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Unit</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className='table-body'>
            {api.data?.map((item, index) => (
              <tr key={index}>
                <th>{index}</th>
                <th>{item.name}</th>
                <th>{item.unit}</th>
                <th>{item.image}</th>
                {/* <th>{item.id}</th> */}
                <th className='btns'>
                  <button
                    // disabled={api.length === 1}
                    onClick={() => handleRemoveFields(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }

  return <div>{content}</div>;
}

export default Table;
