import {CocktailRepository} from "../repositories/CocktailRepository";
import {BaseController} from "./BaseController";
import {ApiResponse} from "../models/ApiResponse";
import express from "express";
import {Cocktail} from "../models/Cocktail";
import { IngredientRepository } from "../repositories/IngredientRepository";


export class CocktailController extends BaseController<CocktailRepository> {

    constructor(repository: CocktailRepository) {
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

    async update(req: express.Request, res: express.Response) {
        let result: ApiResponse<Cocktail>;
        try {
            const input: Cocktail = req.body;
            if (this.isNullOrEmpty(input.name) || this.isNullOrEmpty(input.recipe) || input.ingredients.length < 1) {
                result = new ApiResponse<Cocktail>(null, false, 'Wrong request input');
                return this.error(res, result);
            }
            let updateResult = await this._repository.update(input);
            console.log(updateResult);
            const cocktail = await this._repository.getById(input.id);
            result = new ApiResponse<Cocktail>(cocktail, true);
            return this.ok(res, result);
        } catch (e) {
            result = new ApiResponse<Cocktail>(null, false, e.toString());
            return this.error(res, result);
        }
    }


    async getById(req: express.Request, res: express.Response) {
        let result: ApiResponse<Cocktail>;
        try {
            if (this.isNullOrEmpty(req.query.id)) {
                result = new ApiResponse<Cocktail>(null, false, 'Wrong ID format');
                return this.error(res, result);
            }
            let id = req.query.id.toString();
            const cocktail = await this._repository.getById(id);
            result = new ApiResponse<Cocktail>(cocktail, true);
            return this.ok(res, result);
        } catch (e) {
            result = new ApiResponse<Cocktail>(null, false, e.toString());
            return this.error(res, result);
        }
    }


    async all(req: express.Request, res: express.Response) {
        let result: ApiResponse<Cocktail[]>;
        try {
            const cocktails = await this._repository.all();
            result = new ApiResponse<Cocktail[]>(cocktails, true);
            return this.ok(res, result);
        } catch (e) {
            result = new ApiResponse<Cocktail[]>(null, false, e.toString());
            return this.error(res, result);
        }
    }

    async create(req: express.Request, res: express.Response) {
        let result: ApiResponse<Cocktail>;
        try {
            const input: Cocktail = req.body;
            if (this.isNullOrEmpty(input.name) || this.isNullOrEmpty(input.recipe) || input.ingredients.length < 1) {
                result = new ApiResponse<Cocktail>(null, false, 'Wrong request input');
                return this.error(res, result);
            }
            const cocktail = await this._repository.create(input);
            result = new ApiResponse<Cocktail>(cocktail, true);
            return this.ok(res, result);
        } catch (e) {
            console.log(e);
            result = new ApiResponse<Cocktail>(null, false, e.toString());
            return this.error(res, result);
        }
    }
}