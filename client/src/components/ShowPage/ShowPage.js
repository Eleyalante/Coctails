import "./ShowPage.scss";
import ScnHeader from "../../common/ScnHeader/Header";
import React, { useEffect, useState } from "react";
import ModalList from "./ModalList";
// import List from "../../data";

function ShowPage() {
  // console.log(<List />);
  return (
    <>
      <ScnHeader />
      <section className='home-cocktail'>
        <div className='title'>
          <h3>My cocktail</h3>
          <a href='/mycocktails/trash'>Trash bin</a>
        </div>
        <div className='table'>
          <ModalList />
          <section>{/* {<List key={item.id}/>} */}</section>
        </div>
      </section>
    </>
  );
}

export default ShowPage;
