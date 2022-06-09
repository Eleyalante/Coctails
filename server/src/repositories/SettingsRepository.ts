import { BaseRepository } from "./BaseRepository";
import SettingsModel, { Settings } from "../models/Settings";
import * as mongodb from "mongodb";


export class SettingsRepository extends BaseRepository<Settings> {

    constructor() {
        super(SettingsModel);
    }

    async getById(id: string): Promise<Settings> {
        return this._model.findOne({ '_id': id });
    }

    async all(): Promise<Settings[]> {
        return this._model.find({}).exec();
    }

    async update(item: Settings): Promise<mongodb.UpdateResult> {
        let exists = await this._model.exists({ appName: item.appName, '_id': { $ne: item.id } });
        if (exists !== null) {
            throw new Error("Settings with this app name already exists");
        } else {
            if (item.logo.length < 1) {
                return this._model.updateOne(
                    { '_id': item.id }, {
                    appName: item.appName,
                    color: item.color,
                }
                );
            } else {
                return this._model.updateOne(
                    { '_id': item.id }, {
                    appName: item.appName,
                    color: item.color,
                    logo: item.logo
                }
                );
            }

        }

    }

    override async create(item: Settings): Promise<Settings> {
        let exists = await this._model.exists({ appName: item.appName });
        if (exists != null) {
            throw new Error("Settings with this app name already exists");
        } else {
            return super.create(item);
        }
    }

}