import "./ShowPage.scss";
import ScnHeader from "../../common/ScnHeader/Header";
import React, { useEffect, useState } from "react";
import Table from "./Table";
// import List from "../../data";

function ShowPage() {
  return (
    <>
      <ScnHeader />
      <Table />
    </>
  );
}

export default ShowPage;
