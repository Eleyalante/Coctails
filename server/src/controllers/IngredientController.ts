import {IngredientRepository} from "../repositories/IngredientRepository";
import {ApiResponse} from "../models/ApiResponse";
import express from "express";
import {Ingredient} from "../models/Ingredient";
import {BaseController} from "./BaseController";
import { INGREDIENT_UPDATE_SCHEMA } from "../schemas/IngredientSchema";

export class IngredientController extends BaseController<IngredientRepository> {

    constructor(repository: IngredientRepository) {
        super(repository);
    }


    async delete(req: express.Request, res: express.Response) {
        let result: ApiResponse<boolean>;
        try {
            if (this.isNullOrEmpty(req.query.id)) {
                result = new ApiResponse<boolean>(null, false, 'Wrong ID format');
                return this.error(res, result);
            }
            let id = req.query.id.toString();
            const deleteResult = await this._repository.delete(id);
            if(deleteResult == null){
                result = new ApiResponse<boolean>(false, false,'Delete was not successfully');
                return this.error(res, result);
            }
            result = new ApiResponse<boolean>(deleteResult.acknowledged, true);
            return this.ok(res, result);
        } catch (e) {
            result = new ApiResponse<boolean>(null, false, e.toString());
            return this.error(res, result);
        }
    }

    async getById(req: express.Request, res: express.Response) {
        let result: ApiResponse<Ingredient>;
        try {
            if (this.isNullOrEmpty(req.query.id)) {
                result = new ApiResponse<Ingredient>(null, false, 'Wrong ID format');
                return this.error(res, result);
            }
            let id = req.query.id.toString();
            const ingredient = await this._repository.getById(id);
            result = new ApiResponse<Ingredient>(ingredient, true);
            return this.ok(res, result);
        } catch (e) {
            result = new ApiResponse<Ingredient>(null, false, e.toString());
            return this.error(res, result);
        }
    }

    async update(req: express.Request, res: express.Response) {
        let result: ApiResponse<Ingredient>;
        try {
            this.validateReqBody(INGREDIENT_UPDATE_SCHEMA, req.body);
            const input: Ingredient = req.body;

            let updateResult = await this._repository.update(input);
            console.log(updateResult);
            const cocktail = await this._repository.getById(input.id);
            result = new ApiResponse<Ingredient>(cocktail, true);
            return this.ok(res, result);
        } catch (e) {
            result = new ApiResponse<Ingredient>(null, false, e.toString());
            return this.error(res, result);
        }
    }

    async all(req: express.Request, res: express.Response) {
        let result: ApiResponse<Ingredient[]>;
        try {
            const ingredients = await this._repository.all();
            result = new ApiResponse<Ingredient[]>(ingredients, true);
            return this.ok(res, result);
        } catch (e) {
            result = new ApiResponse<Ingredient[]>(null, false, e.toString());
            return this.error(res, result);
        }
    }

    async getByUnit(req: express.Request, res: express.Response) {
        let result: ApiResponse<Ingredient[]>;
        try {
            if (this.isNullOrEmpty(req.query.unit)) {
                result = new ApiResponse<Ingredient[]>(null, false, 'Wrong unit format');
                return this.error(res, result);
            }
            let unit = req.query.unit.toString();
            const ingredients = await this._repository.getByUnit(unit);
            result = new ApiResponse<Ingredient[]>(ingredients, true);
            return this.ok(res, result);
        } catch (e) {
            result = new ApiResponse<Ingredient[]>(null, false, e.toString());
            return this.error(res, result);
        }
    }

    async getByName(req: express.Request, res: express.Response) {
        let result: ApiResponse<Ingredient>;
        try {
            if (this.isNullOrEmpty(req.query.name)) {
                result = new ApiResponse<Ingredient>(null, false, 'Wrong name format');
                return this.error(res, result);
            }
            let name = req.query.name.toString();
            const ingredient = await this._repository.getByName(name);
            result = new ApiResponse<Ingredient>(ingredient, true);
            return this.ok(res, result);
        } catch (e) {
            result = new ApiResponse<Ingredient>(null, false, e.toString());
            return this.error(res, result);
        }
    }


    async create(req: express.Request, res: express.Response) {
        let result: ApiResponse<Ingredient>;
        try {
            this.validateReqBody(INGREDIENT_UPDATE_SCHEMA, req.body);
            const input: Ingredient = req.body;

            const ingredient = await this._repository.create(input);

            result = new ApiResponse<Ingredient>(ingredient, true);
            return this.ok(res, result);
        } catch (e) {
            result = new ApiResponse<Ingredient>(null, false, e.toString());
            return this.error(res, result);
        }
    }
}