import express, {json, urlencoded} from "express";
import {DataContext} from "./utils/DataContext";
import ingredientRouter from "./routers/IngredientRouter";
import cocktailRouter from "./routers/CocktailRouter";
import cors from 'cors';


const PORT = process.env.PORT || 8080;
const app = express();

app.use(json());
app.use(urlencoded({extended: true}));
app.use(cors());

DataContext.connect().then(
    () => {
    
        app.use('/api/ingredients', ingredientRouter);
        app.use('/api/cocktails', cocktailRouter);
        app.listen(PORT, () => {
                console.log(`Example app listening on port ${PORT}!`)
            },
        );
    }
);