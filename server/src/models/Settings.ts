import mongoose from "mongoose";

export class Settings extends mongoose.Document {
    id: string;
    appName: string;
    version: string;

}

const settingsSchema: mongoose.Schema = new mongoose.Schema({
    appName: {
        type: String,
        required: true,
        unique: true,
    },
    version: {
        type: String,
        required: true
    }
}, {
    versionKey: false,
});

const SettingsModel = mongoose.model<Settings>("Settings", settingsSchema);

export default SettingsModel;