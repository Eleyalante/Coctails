import {CocktailRepository} from "../repositories/CocktailRepository";
import {BaseController} from "./BaseController";
import {ApiResponse} from "../models/ApiResponse";
import express from "express";
import {Cocktail} from "../models/Cocktail";
import { IngredientRepository } from "../repositories/IngredientRepository";
import Ajv from "ajv";
import { COCKTAIL_UPDATE_SCHEMA, COCKTAIL_CREATE_SCHEMA } from "../schemas/CocktailSchema";

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
            this.validateReqBody(COCKTAIL_UPDATE_SCHEMA, req.body);
            const input: Cocktail = req.body;

            let updateResult = await this._repository.update(input);
            if(updateResult.modifiedCount == 1){
                const cocktail = await this._repository.getById(input.id);
                result = new ApiResponse<Cocktail>(cocktail, true);
                return this.ok(res, result);
            }else{
                console.log(updateResult);
                throw new Error('Update failed')
            }
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
            
            if(cocktail === null){
                result = new ApiResponse<Cocktail>(null, false, 'Cocktail not found');
                return this.error(res, result);
            }
            result = new ApiResponse<Cocktail>(cocktail, true);
            return this.ok(res, result);
        } catch (e) {
            result = new ApiResponse<Cocktail>(null, false, e.toString());
            return this.error(res, result);
        }
    }


    async list(req: express.Request, res: express.Response) {
        let result: ApiResponse<Cocktail[]>;
        try {
            if(this.isNull(req.query.pageSize) || this.isNull(req.query.pageNumber)){
                result = new ApiResponse<Cocktail[]>(null, false, 'Wrong input format');
                return this.error(res, result);
            }
            const cocktails = await this._repository.list(Number(req.query.pageNumber),Number(req.query.pageSize));
            result = new ApiResponse<Cocktail[]>(cocktails, true);
            return this.ok(res, result);
        } catch (e) {
            result = new ApiResponse<Cocktail[]>(null, false, e.toString());
            return this.error(res, result);
        }
    }


    async getByIngredient(req: express.Request, res: express.Response) {
        let result: ApiResponse<Cocktail[]>;
        try {
            let id = req.query.id;
            console.log(id);
            if (this.isNullOrEmpty(id)) {
                result = new ApiResponse<Cocktail[]>(null, false, 'Wrong ingredient ID format');
                return this.error(res, result);
            }
            const cocktails = await this._repository.getByIngredient(id as string);
            result = new ApiResponse<Cocktail[]>(cocktails, true);
            return this.ok(res, result);
        } catch (e) {
            result = new ApiResponse<Cocktail[]>(null, false, e.toString());
            return this.error(res, result);
        }
    }

    async getByCategory(req: express.Request, res: express.Response) {
        let result: ApiResponse<Cocktail[]>;
        try {
            let id = req.query.id;
            console.log(id);
            if (this.isNullOrEmpty(id)) {
                result = new ApiResponse<Cocktail[]>(null, false, 'Wrong category ID format');
                return this.error(res, result);
            }
            const cocktails = await this._repository.getByCategory(id as string);
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
            const ajv = new Ajv();
            const valid = ajv.validate(COCKTAIL_CREATE_SCHEMA, req.body);
            if(!valid){
                console.log(ajv.errors);
                return  this.error(res, new ApiResponse<Cocktail>(null, false, ajv.errorsText()));
            }
            const input: Cocktail = req.body;
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