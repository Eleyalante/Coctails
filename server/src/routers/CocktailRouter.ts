import { Router } from "express";
import {CocktailController} from "../controllers/CocktailController";
import {CocktailRepository} from "../repositories/CocktailRepository";


const cocktailRouter = Router();
const controller = new CocktailController(new CocktailRepository);

cocktailRouter.get('/all', (req,res) => controller.all(req,res))
cocktailRouter.get('/getById', (req,res) => controller.getById(req,res))


cocktailRouter.delete('/delete', (req,res) => controller.delete(req,res))


cocktailRouter.post('/add', (req,res) => controller.add(req,res))
cocktailRouter.post('/update', (req,res) => controller.update(req,res))


export default cocktailRouter;

