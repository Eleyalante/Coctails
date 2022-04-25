import express from "express";
import {ApiResponse} from "../models/ApiResponse";

export abstract class BaseController<BaseRepository> {

    protected readonly _repository: BaseRepository;


    protected constructor(repository: BaseRepository) {
        this._repository = repository;
    }

    jsonResponse(res: express.Response, code: number, data: any) {
        return res.status(code).json(data)
    }

    ok(res: express.Response, apiResponse: ApiResponse<any>) {
        return this.jsonResponse(res, 400, apiResponse);
    }

    error(res: express.Response, apiResponse: ApiResponse<any>) {
        return this.jsonResponse(res, 400, apiResponse);
    }

    unauthorized(res: express.Response, message = 'Unauthorized') {
        return this.jsonResponse(res, 401, message);
    }

    forbidden(res: express.Response, message = 'Forbidden') {
        return this.jsonResponse(res, 403, message);
    }

    notFound(res: express.Response, message = 'Not found') {
        return this.jsonResponse(res, 404, message);
    }

    internalError(res: express.Response, message = 'Internal server error') {
        return this.jsonResponse(res, 500, message);
    }


    isNullOrEmpty(value: any):boolean{
        return value === undefined || value === null || value.length < 1;
    }

}