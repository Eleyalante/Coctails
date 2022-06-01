import React, { useEffect, useState } from "react";
import "./AddPage.scss";
import ScnHeader from "../../common/ScnHeader/Header";
import AddForm from "./AddForm";
import { BrowserRouter } from "react-router-dom";

function AddPage() {
  return (
    <>
      <ScnHeader />
      <AddForm />
    </>
  );
}

export default AddPage;
