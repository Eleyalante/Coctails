import express, {json, urlencoded} from "express";
import {DataContext} from "./utils/DataContext";
import ingredientRouter from "./routers/IngredientRouter";
import cocktailRouter from "./routers/CocktailRouter";
import cors from 'cors';
import { Logger } from "./utils/Logger";
import settingsRouter from "./routers/SettingsRouter";


const PORT = process.env.PORT || 8080;
const app = express();

app.use(json());
app.use(urlencoded({extended: true}));
app.use(cors());
app.use(new Logger().LogRequest);

DataContext.connect().then(
    () => {
    
        app.use('/api/ingredients', ingredientRouter);
        app.use('/api/cocktails', cocktailRouter);
        app.use('/api/settings', settingsRouter);
        app.listen(PORT, () => {
                console.log(`Cocktails app listening on port ${PORT}!`)
            },
        );
    }
);