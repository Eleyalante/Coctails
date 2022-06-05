import NavigationBar from "./components/NavigationBar";
import {Route, Routes} from "react-router-dom"
import React from "react";
import AddIngredient from "./pages/AddIngredient";
import Ingredients from "./pages/Ingredients";

function App() {
  return (
    <div style ={{height:'100vh'}} >
        <NavigationBar />
        <Routes>
            <Route path='/ingredients' element={<Ingredients />} />
            <Route path='/add_ingredient/:id' element={<AddIngredient />} />
            <Route path='/add_ingredient' element={<AddIngredient />} />
            {/* <Route path='/category' element={<Category />} />
      <Route path='/cocktail' element={<Cocktail />} />
      <Route path='/searched/search' element={<Searched />} /> */}
        </Routes>
    </div>
  );
}

export default App;
