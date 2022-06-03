import {Router} from "express";
import {SettingsController} from "../controllers/SettingsController";
import {SettingsRepository} from "../repositories/SettingsRepository";


const settingsRouter = Router();
const controller = new SettingsController(new SettingsRepository());

settingsRouter.get('/getById', (req,res) => controller.getById(req,res))


export default settingsRouter;