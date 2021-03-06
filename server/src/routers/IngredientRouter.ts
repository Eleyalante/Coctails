import {Router} from "express";
import {IngredientController} from "../controllers/IngredientController";
import {IngredientRepository} from "../repositories/IngredientRepository";


const ingredientRouter = Router();
const controller = new IngredientController(new IngredientRepository());

ingredientRouter.get('/list', (req,res) => controller.list(req,res))
ingredientRouter.get('/getByUnit', (req,res) => controller.getByUnit(req,res))
ingredientRouter.get('/getByName', (req,res) => controller.getByName(req,res))
ingredientRouter.get('/getById', (req,res) => controller.getById(req,res))

ingredientRouter.delete('/delete', (req,res) => controller.delete(req,res))

ingredientRouter.post('/create', (req,res) => controller.create(req,res))
ingredientRouter.post('/update', (req,res) => controller.update(req,res))


export default ingredientRouter;