import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
// import Category from "../pages/Category";
// import Cocktail from "../pages/Cocktail";
// import Searched from "../pages/Searched";
import Home from "../pages/Home";
import AddIngredient from "../pages/AddIngredient";
import AddCocktal from "../pages/AddCocktail";
import ShowCocktail from "../pages/ShowCocktail";
import ShowIngredient from "../pages/ShowIngredient";

function Pages() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/addingredient' element={<AddIngredient />} />
      <Route path='/addcocktail' element={<AddCocktal />} />
      <Route path='/ingredient' element={<ShowIngredient />} />
      <Route path='/cocktail' element={<ShowCocktail />} />
      {/* <Route path='/category' element={<Category />} />
      <Route path='/cocktail' element={<Cocktail />} />
      <Route path='/searched/search' element={<Searched />} /> */}
    </Routes>
  );
}

export default Pages;
