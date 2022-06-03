import {BaseRepository} from "./BaseRepository";
import SettingsModel,{Settings} from "../models/Settings";
import * as mongodb from "mongodb";


export class SettingsRepository extends BaseRepository<Settings> {

    constructor() {
        super(SettingsModel);
    }

    async getById(id: string): Promise<Settings> {
        return this._model.findOne({id:id});
    }

    
}