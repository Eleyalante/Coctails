import NavigationBar from "./components/NavigationBar";
import {Route, Routes} from "react-router-dom";
import React from "react";
import AddIngredient from "./pages/AddIngredient";
import Ingredients from "./pages/Ingredients";
import Cocktails from "./pages/Cocktails";
import {ThemeProvider} from "@mui/material";
import {generateTheme, mainTheme} from "./utils/Values";
import Categories from "./pages/Categories";
import AddCategory from "./pages/AddCategory";
import AddCocktail from "./pages/AddCocktail";
import AddSettings from "./pages/AddSettings";
import NoData from "./components/NoData";


function App() {
    const settingsValue = localStorage.getItem('settings');
    console.log(settingsValue);
    let theme = mainTheme;
    if (settingsValue === null) {
        return <AddSettings/>;
    } else {
        const settings = JSON.parse(localStorage.getItem('settings'));
        theme = generateTheme(settings.color);
    }
    return (
        <ThemeProvider theme={theme}>
            <div style={{height: '100vh'}}>
                <NavigationBar/>
                <Routes>

                    <Route path='/add_settings/:id' element={<AddSettings/>}/>
                    <Route path='/settings' element={<div/>}/>

                    <Route path='/ingredients' element={<Ingredients/>}/>
                    <Route path='/add_ingredient/:id' element={<AddIngredient/>}/>
                    <Route path='/add_ingredient' element={<AddIngredient/>}/>

                    <Route path='/categories' element={<Categories/>}/>
                    <Route path='/add_category/:id' element={<AddCategory/>}/>
                    <Route path='/add_category' element={<AddCategory/>}/>

                    <Route path="/cocktails" element={<Cocktails/>}/>
                    <Route path='/add_cocktail' element={<AddCocktail/>}/>
                    <Route path='/add_cocktail/:id' element={<AddCocktail/>}/>

                    <Route path="*" element={<Cocktails/>}/>
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
