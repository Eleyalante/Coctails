import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import DeleteModal from "../../common/DeleteModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
const url = "http://localhost:8080/api";

function Table(list, colNames) {
  const [api, setApi] = useState([]);
  const [confirm, setConfirm] = useState({
    isLoading: false,
  });
  // --------------------------------------GET DATA FROM SERVER---------------------------

  useEffect(() => {
    try {
      axios.get(`${url}/ingredients/all`).then((res) => {
        setApi(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, [url]);

  // --------------------------------------REMOVE---------------------------
  // --------------------------------------Delete Form---------------------------
  const handleConfirm = (isLoading) => {
    setConfirm({
      isLoading,
    });
  };
  const idProductRef = useRef();
  const handleRemoveFields = (id, e) => {
    handleConfirm(true);
    idProductRef.current = id;
  };
  const areUSureDelete = (choose) => {
    if (choose) {
      axios
        .delete(`${url}/ingredients/delete?id=${idProductRef.current}`)
        .then((res) => {
          //refresh the page
          window.location.reload(false);
        })
        .catch((err) => {
          console.log(err);
        });

      handleConfirm("", false);
    } else {
      handleConfirm("", false);
    }
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
                <th className='btns'>
                  <button onClick={() => handleRemoveFields(item.id)}>
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
        {confirm.isLoading && <DeleteModal onConfirm={areUSureDelete} />}
      </section>
    );
  }

  return <div>{content}</div>;
}

export default Table;
