import React, { useState, useEffect, useRef } from "react";

function MainModal() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const handleChangeN = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeT = (e) => {
    setType(e.target.value);
  };
  return (
    <>
      <div className='title'>
        <p>Name</p>
        <input
          placeholder='...'
          spellCheck={false}
          value={title}
          onChange={handleChangeN}
        ></input>
      </div>
      <div className='source'>
        <p>Type</p>
        <input
          placeholder='...'
          spellCheck={false}
          value={type}
          onChange={handleChangeT}
        ></input>
      </div>
    </>
  );
}

export default MainModal;
