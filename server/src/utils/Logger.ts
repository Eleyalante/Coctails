import express from "express";

export class Logger{


    LogRequest(req:express.Request, res:express.Response, next:express.NextFunction) : void{
        console.log(`${req.method} - ${req.url} - ${new Date().toLocaleString()}`);
        let requestMethod = req.method;
        if(requestMethod == 'POST'){
            console.log(JSON.stringify(req.body,null,'\t'));
        }
        next();
    }

}