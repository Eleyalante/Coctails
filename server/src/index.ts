import express, {json, urlencoded} from "express";
import {DataContext} from "./utils/DataContext";
import ingredientRouter from "./routers/IngredientRouter";
import cocktailRouter from "./routers/CocktailRouter";
import cors from 'cors';
import { Logger } from "./utils/Logger";
import settingsRouter from "./routers/SettingsRouter";
import categoryRouter from "./routers/CategoryRouter";
import { exit } from "process";
import { SettingsRepository } from "./repositories/SettingsRepository";


const PORT = process.env.PORT || 8080;
const databaseIP =  'mongodb://localhost:27017/';
const databaseName = 'cocktails';

const app = express();

app.use(json({limit:'15mb'}))
app.use(urlencoded({extended: true}));
app.use(cors());

const logger = new Logger();
app.use(logger.LogRequest);



const dataContext = new DataContext(databaseIP,databaseName);

dataContext.connect().then(
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
