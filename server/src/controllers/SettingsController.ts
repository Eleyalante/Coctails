import {SettingsRepository} from "../repositories/SettingsRepository";
import {ApiResponse} from "../models/ApiResponse";
import express from "express";
import {Settings} from "../models/Settings";
import {BaseController} from "./BaseController";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

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

    all(req: express.Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: express.Response<any, Record<string, any>>) {
        throw new Error("Method not implemented.");
    }
    delete(req: express.Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: express.Response<any, Record<string, any>>) {
        throw new Error("Method not implemented.");
    }
    update(req: express.Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: express.Response<any, Record<string, any>>) {
        throw new Error("Method not implemented.");
    }
    create(req: express.Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: express.Response<any, Record<string, any>>) {
        throw new Error("Method not implemented.");
    }

}