import "./ShowPage.scss";
import ScnHeader from "../../common/ScnHeader/Header";
import Header from "../../common/Header/Navbar";
import React, { useEffect, useState } from "react";
import Table from "./Table";
// import List from "../../data";

function Show() {
  return (
    <>
      <ScnHeader />
      <Header />
      <Table />
    </>
  );
}

export default Show;
