import {Router} from "express";
import {IngredientController} from "../controllers/IngredientController";
import {IngredientRepository} from "../repositories/IngredientRepository";


const ingredientRouter = Router();
const controller = new IngredientController(new IngredientRepository());

ingredientRouter.get('/all', (req,res) => controller.all(req,res))
ingredientRouter.get('/getByUnit', (req,res) => controller.getByUnit(req,res))
ingredientRouter.get('/getByName', (req,res) => controller.getByName(req,res))
ingredientRouter.get('/getByName', (req,res) => controller.getByName(req,res))
ingredientRouter.get('/getById', (req,res) => controller.getById(req,res))


ingredientRouter.post('/add', (req,res) => controller.add(req,res))


export default ingredientRouter;