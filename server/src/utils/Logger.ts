import express from "express";

export class Logger{


    LogRequest(req:express.Request, res:express.Response, next:express.NextFunction) : void{
        console.log(`${req.method} - ${req.url} - ${new Date().toISOString()}`);
        next();
    }

}