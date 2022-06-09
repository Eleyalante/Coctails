import { SettingsRepository } from "../repositories/SettingsRepository";
import { ApiResponse } from "../models/ApiResponse";
import express from "express";
import { Settings } from "../models/Settings";
import { BaseController } from "./BaseController";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import Ajv from "ajv";
import { SETTINGS_CREATE_SCHEMA, SETTINGS_UPDATE_SCHEMA } from "../schemas/SettingsSchema";

export class SettingsController extends BaseController<SettingsRepository> {


    constructor(repository: SettingsRepository) {
        super(repository);
    }

    async getById(req: express.Request, res: express.Response) {
        let result: ApiResponse<Settings>;
        try {
            if (this.isNullOrEmpty(req.query.id)) {
                result = new ApiResponse<Settings>(null, false, 'Wrong ID format');
                return this.error(res, result);
            }
            let id = req.query.id.toString();
            const ingredient = await this._repository.getById(id);
            result = new ApiResponse<Settings>(ingredient, true);
            return this.ok(res, result);
        } catch (e) {
            result = new ApiResponse<Settings>(null, false, e.toString());
            return this.error(res, result);
        }
    }

    async all(req: express.Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: express.Response<any, Record<string, any>>) {
        let result: ApiResponse<Settings[]>;
        try {
            const cocktails = await this._repository.all();
            result = new ApiResponse<Settings[]>(cocktails, true);
            return this.ok(res, result);
        } catch (e) {
            result = new ApiResponse<Settings[]>(null, false, e.toString());
            return this.error(res, result);
        }
    }

    async delete(req: express.Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: express.Response<any, Record<string, any>>) {
        let result: ApiResponse<boolean>;
        try {
            if (this.isNullOrEmpty(req.query.id)) {
                result = new ApiResponse<boolean>(null, false, 'Wrong ID format');
                return this.error(res, result);
            }
            let id = req.query.id.toString();
            let deleteResult = await this._repository.delete(id);
            result = new ApiResponse<boolean>(deleteResult.acknowledged, true);
            return this.ok(res, result);
        } catch (e) {
            result = new ApiResponse<boolean>(null, false, e.toString());
            return this.error(res, result);
        }
    }

    async update(req: express.Request, res: express.Response) {
        let result: ApiResponse<Settings>;
        try {
            this.validateReqBody(SETTINGS_UPDATE_SCHEMA, req.body);
            const input: Settings = req.body;

            let updateResult = await this._repository.update(input);
            if (updateResult.modifiedCount == 1) {
                const cocktail = await this._repository.getById(input.id);
                result = new ApiResponse<Settings>(cocktail, true);
                return this.ok(res, result);
            } else {
                console.log(updateResult);
                throw new Error('Update failed')
            }
        } catch (e) {
            result = new ApiResponse<Settings>(null, false, e.toString());
            return this.error(res, result);
        }
    }

    async create(req: express.Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: express.Response<any, Record<string, any>>) {
        let result: ApiResponse<Settings>;
        try {
            const ajv = new Ajv();
            const valid = ajv.validate(SETTINGS_CREATE_SCHEMA, req.body);
            if (!valid) {
                console.log(ajv.errors);
                return this.error(res, new ApiResponse<Settings>(null, false, ajv.errorsText()));
            }
            const input: Settings = req.body;
            const settings = await this._repository.create(input);
            result = new ApiResponse<Settings>(settings, true);
            return this.ok(res, result);

        } catch (e) {
            result = new ApiResponse<Settings>(null, false, e.toString());
            return this.error(res, result);
        }
    }

}