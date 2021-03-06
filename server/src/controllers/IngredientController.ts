import { IngredientRepository } from "../repositories/IngredientRepository";
import { ApiResponse } from "../models/ApiResponse";
import express from "express";
import { Ingredient } from "../models/Ingredient";
import { BaseController } from "./BaseController";
import { INGREDIENT_CREATE_SCHEMA, INGREDIENT_UPDATE_SCHEMA } from "../schemas/IngredientSchema";
import { CocktailRepository } from "../repositories/CocktailRepository";

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
            const cocktailRepository = new CocktailRepository();
            let coctailsWithIngredient = await cocktailRepository.getByIngredient(id);
            console.log(coctailsWithIngredient);
            if (coctailsWithIngredient.length > 0) {
                result = new ApiResponse<boolean>(null, false, 'Can\'t delete because some cocktails using this ingredient');
                return this.error(res, result);
            }
            const deleteResult = await this._repository.delete(id);
            if (deleteResult == null) {
                result = new ApiResponse<boolean>(false, false, 'Delete was not successfully');
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
            if (ingredient === null) {
                result = new ApiResponse<Ingredient>(null, false, 'Ingredient not found');
                return this.error(res, result);
            }
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
            if (this.isNullOrEmpty(input.image)) {
                input.image = '';
            }

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

    async list(req: express.Request, res: express.Response) {
        let result: ApiResponse<Ingredient[]>;
        try {
            if (this.isNull(req.query.pageSize) || this.isNull(req.query.pageNumber)) {
                result = new ApiResponse<Ingredient[]>(null, false, 'Wrong input format');
                return this.error(res, result);
            }
            const ingredients = await this._repository.list(Number(req.query.pageNumber), Number(req.query.pageSize));
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
            this.validateReqBody(INGREDIENT_CREATE_SCHEMA, req.body);
            const input: Ingredient = req.body;

            const ingredient = await this._repository.create(input);

            result = new ApiResponse<Ingredient>(ingredient, true);
            return this.ok(res, result);
        } catch (e) {
            console.log(e);
            result = new ApiResponse<Ingredient>(null, false, e.toString());
            return this.error(res, result);
        }
    }
}