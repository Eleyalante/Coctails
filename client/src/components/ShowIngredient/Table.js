import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "http://localhost:8080/api";

function Table(list, colNames) {
  const [api, setApi] = useState([]);
  let content = null;

  useEffect(() => {
    try {
      axios.get(`${url}/ingredients/all`).then((res) => {
        setApi(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, [url]);

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
