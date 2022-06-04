import {Router} from "express";
import {CategoryController} from "../controllers/CategoryController";
import {CategoryRepository} from "../repositories/CategoryRepository";


const categoryRouter = Router();
const controller = new CategoryController(new CategoryRepository());

categoryRouter.get('/all', (req,res) => controller.all(req,res))
categoryRouter.get('/getByName', (req,res) => controller.getByName(req,res))
categoryRouter.get('/getById', (req,res) => controller.getById(req,res))

categoryRouter.delete('/delete', (req,res) => controller.delete(req,res))

categoryRouter.post('/create', (req,res) => controller.create(req,res))
categoryRouter.post('/update', (req,res) => controller.update(req,res))


export default categoryRouter;