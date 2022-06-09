import express from "express";
import { ApiResponse } from "../models/ApiResponse";
import { SettingsRepository } from "../repositories/SettingsRepository";

export class Logger {

    async LogRequest(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
        try {
            // let settingsId = req.headers['settings-id'] as string;
            // if (settingsId === undefined) {
            //     let response = new ApiResponse<null>(null, false, 'Settings ID must be filled');
            //     res.status(401).json(response).end();
            //     return;
            // } else {
            //     const repository = new SettingsRepository();
            //     let settings = await repository.getById(settingsId);
            //     if (settings === null) {
            //         let response = new ApiResponse<null>(null, false, 'Settings not found');
            //         res.status(401).json(response);
            //         return;
            //     }
            // }
            console.log(`${req.method} - ${req.url} - ${new Date().toLocaleString()}`);
            let requestMethod = req.method;
            if (requestMethod == 'POST') {
                console.log(JSON.stringify(req.body, null, '\t'));
            }
            next();
        } catch (e) {
            let result = new ApiResponse<null>(null, false, e.toString());
            res.status(500).json(result);
        }
    }

}