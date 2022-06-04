import {CategoryRepository} from "../repositories/CategoryRepository";
import {ApiResponse} from "../models/ApiResponse";
import express from "express";
import {Ingredient} from "../models/Ingredient";
import {BaseController} from "./BaseController";
import {Category} from "../models/Category";
import { CATEGORY_CREATE_SCHEMA, CATEGORY_UPDATE_SCHEMA } from "../schemas/CategorySchema";

export class CategoryController extends BaseController<CategoryRepository> {

    constructor(repository: CategoryRepository) {
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
        let result: ApiResponse<Category>;
        try {
            if (this.isNullOrEmpty(req.query.id)) {
                result = new ApiResponse<Category>(null, false, 'Wrong ID format');
                return this.error(res, result);
            }
            let id = req.query.id.toString();
            const category = await this._repository.getById(id);
            result = new ApiResponse<Category>(category, true);
            return this.ok(res, result);
        } catch (e) {
            result = new ApiResponse<Category>(null, false, e.toString());
            return this.error(res, result);
        }
    }

    async update(req: express.Request, res: express.Response) {
        let result: ApiResponse<Category>;
        try {
            this.validateReqBody(CATEGORY_UPDATE_SCHEMA, req.body);
            const input: Category = req.body;

            let updateResult = await this._repository.update(input);
            console.log(updateResult);
            const category = await this._repository.getById(input.id);
            result = new ApiResponse<Category>(category, true);
            return this.ok(res, result);
        } catch (e) {
            result = new ApiResponse<Category>(null, false, e.toString());
            return this.error(res, result);
        }
    }

    async all(req: express.Request, res: express.Response) {
        let result: ApiResponse<Category[]>;
        try {
            const categories = await this._repository.all();
            result = new ApiResponse<Category[]>(categories, true);
            return this.ok(res, result);
        } catch (e) {
            result = new ApiResponse<Category[]>(null, false, e.toString());
            return this.error(res, result);
        }
    }

    async getByName(req: express.Request, res: express.Response) {
        let result: ApiResponse<Category>;
        try {
            if (this.isNullOrEmpty(req.query.name)) {
                result = new ApiResponse<Category>(null, false, 'Wrong name format');
                return this.error(res, result);
            }
            let name = req.query.name.toString();
            const category = await this._repository.getByName(name);
            result = new ApiResponse<Category>(category, true);
            return this.ok(res, result);
        } catch (e) {
            result = new ApiResponse<Category>(null, false, e.toString());
            return this.error(res, result);
        }
    }


    async create(req: express.Request, res: express.Response) {
        let result: ApiResponse<Category>;
        try {
            this.validateReqBody(CATEGORY_CREATE_SCHEMA, req.body);
            const input: Category = req.body;

            const category = await this._repository.create(input);

            result = new ApiResponse<Category>(category, true);
            return this.ok(res, result);
        } catch (e) {
            result = new ApiResponse<Category>(null, false, e.toString());
            return this.error(res, result);
        }
    }
}