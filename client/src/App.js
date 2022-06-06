import NavigationBar from "./components/NavigationBar";
import { Route, Routes } from "react-router-dom";
import React from "react";
import AddIngredient from "./pages/AddIngredient";
import Ingredients from "./pages/Ingredients";
import Cocktails from "./pages/Cocktails";
import { ThemeProvider } from "@mui/material";
import { mainTheme } from "./utils/Values";
import Categories from "./pages/Categories";
import AddCategory from "./pages/AddCategory";

function App() {
    return (
        <ThemeProvider theme={mainTheme}>
            <div style={{ height: "100vh" }}>
                <NavigationBar />
                <Routes>
                    <Route path="/ingredients" element={<Ingredients />} />
                    <Route path="/cocktails" element={<Cocktails />} />
                    <Route path="/add_ingredient/:id" element={<AddIngredient />} />
                    <Route path="/add_ingredient" element={<AddIngredient />} />

                    <Route path="/categories" element={<Categories />} />
                    <Route path="/add_category/:id" element={<AddCategory />} />
                    <Route path="/add_category" element={<AddCategory />} />
                    {/* <Route path='/category' element={<Category />} />
      <Route path='/cocktail' element={<Cocktail />} />
      <Route path='/searched/search' element={<Searched />} /> */}
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
