import express, {json, urlencoded} from "express";
import {DataContext} from "./utils/DataContext";
import ingredientRouter from "./routers/IngredientRouter";
import cocktailRouter from "./routers/CocktailRouter";
import cors from 'cors';
import { Logger } from "./utils/Logger";
import settingsRouter from "./routers/SettingsRouter";
import categoryRouter from "./routers/CategoryRouter";


const PORT = process.env.PORT || 8080;
const app = express();

app.use(json({limit:'15mb'}))
app.use(urlencoded({extended: true}));
app.use(cors());
app.use(new Logger().LogRequest);

DataContext.connect().then(
    () => {
    
        app.use('/api/ingredients', ingredientRouter);
        app.use('/api/cocktails', cocktailRouter);
        app.use('/api/settings', settingsRouter);
        app.use('/api/categories', categoryRouter);
        app.listen(PORT, () => {
                console.log(`Cocktails app listening on port ${PORT}!`)
            },
        );
    }
);