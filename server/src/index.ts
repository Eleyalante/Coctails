import express, {json, urlencoded} from "express";
import {DataContext} from "./utils/DataContext";
import ingredientRouter from "./routers/IngredientRouter";


const PORT = process.env.PORT || 8080;
const app = express();

app.use(json());
app.use(urlencoded({extended: true}));


DataContext.connect().then(
    () => {

        app.use('/ingredients', ingredientRouter);
        app.listen(PORT, () => {
                console.log(`Example app listening on port ${PORT}!`)
            },
        );
    }
);