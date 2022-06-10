import { Router } from "express";
import {CocktailController} from "../controllers/CocktailController";
import {CocktailRepository} from "../repositories/CocktailRepository";


const cocktailRouter = Router();
const controller = new CocktailController(new CocktailRepository);

cocktailRouter.get('/list', (req,res) => controller.list(req,res))
cocktailRouter.get('/getById', (req,res) => controller.getById(req,res))
cocktailRouter.get('/getByIngredient', (req,res) => controller.getByIngredient(req,res))
cocktailRouter.get('/getByCategory', (req,res) => controller.getByCategory(req,res))


cocktailRouter.delete('/delete', (req,res) => controller.delete(req,res))


cocktailRouter.post('/create', (req,res) => controller.create(req,res))
cocktailRouter.post('/update', (req,res) => controller.update(req,res))


export default cocktailRouter;

