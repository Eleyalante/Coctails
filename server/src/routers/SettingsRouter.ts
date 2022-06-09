import {Router} from "express";
import {SettingsController} from "../controllers/SettingsController";
import {SettingsRepository} from "../repositories/SettingsRepository";


const settingsRouter = Router();
const controller = new SettingsController(new SettingsRepository());

settingsRouter.get('/getById', (req,res) => controller.getById(req,res));
settingsRouter.get('/all', (req,res) => controller.all(req,res));


settingsRouter.post('/create', (req,res) => controller.create(req,res));
settingsRouter.post('/update', (req,res) => controller.update(req,res));

settingsRouter.delete('/delete', (req,res) => controller.delete(req,res));


export default settingsRouter;