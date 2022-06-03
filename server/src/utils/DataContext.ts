import mongoose from "mongoose";


export class DataContext {

    private static _databaseUrl: string = "mongodb://localhost:27017/cocktails";

    static async connect() : Promise<void> {
        console.log("CONNECTING TO DB");
        mongoose.set('toJSON', {
            virtuals: true,
            transform: (doc, converted) => {
                delete converted._id;
            }
        });
        await mongoose.connect(DataContext._databaseUrl).then(() => {
            console.log('SUCCESSFULLY CONNECTED DB');
        }).catch((err) => {
            console.log('Not Connected to Database ERROR! ', err);
        });
    }
}