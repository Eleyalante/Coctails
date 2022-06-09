import mongoose from "mongoose";
import { exit } from "process";


export class DataContext {

    private databaseName:string;
    private databaseIP: string;

    
    constructor(ip: string, databaseName: string){
        this.databaseIP = ip;
        this.databaseName = databaseName;
    }

    async connect() : Promise<void> {
        console.log("CONNECTING TO DB");
        mongoose.set('toJSON', {
            virtuals: true,
            transform: (doc, converted) => {
                delete converted._id;
            }
        });
        await mongoose.connect(`${this.databaseIP}${this.databaseName}`).then(() => {
            console.log('SUCCESSFULLY CONNECTED DB');
        }).catch((err) => {
            console.log('Not Connected to Database ERROR! ', err);
            exit(1);
        });
    }
}