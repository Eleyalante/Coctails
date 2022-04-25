import mongoose from "mongoose";


export class DataContext {

    private static _databaseUrl: string = "mongodb://localhost:27017/cocktails";

    static async connect() {
        mongoose.set('toJSON', {
            virtuals: true,
            transform: (doc, converted) => {
                delete converted._id;
            }
        });
        mongoose.connect(DataContext._databaseUrl).then(() => {
            console.log('CONNECTED DB');
        }).catch((err) => {
            console.log('Not Connected to Database ERROR! ', err);
        });
    }
}