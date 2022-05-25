import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
// import Category from "../pages/Category";
// import Cocktail from "../pages/Cocktail";
// import Searched from "../pages/Searched";
import Home from "../pages/Home";
import Add from "../pages/Add";
import MyCocktails from "../pages/myCocktails";
import Header from "../common/Header/Header";

function Pages() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add' element={<Add />} />
      <Route path='/mycocktails' element={<MyCocktails />} />
      {/* <Route path='/category' element={<Category />} />
      <Route path='/cocktail' element={<Cocktail />} />
      <Route path='/searched/search' element={<Searched />} /> */}
    </Routes>
  );
}

export default Pages;
