import BaseService from "./BaseService";
import axios from "axios";

export default class SettingsService extends BaseService {

    settingsUrl = `${this.url}/settings/`

    async fetchAllSettings() {
        try {
            let result = await axios.get(`${this.settingsUrl}all`);
            return result.data;
        } catch (err) {
            return err.response.data;
        }
    };


    async fetchSettings(id) {
        try {
            let fetchUrl = `${this.settingsUrl}getById?id=${id}`;
            let result = await axios.get(fetchUrl);
            return result.data;
        } catch (err) {
            return err.response.data;
        }
    };

    async createSettings(settings) {
        try {
            let fetchUrl = `${this.settingsUrl}create`;
            let result = await axios.post(fetchUrl, settings);
            console.log(result);
            return result.data;
        } catch (err) {
            return err.response.data;
        }
    }

    async updateSettings(settings) {
        try {
            let fetchUrl = `${this.settingsUrl}update`;
            let result = await axios.post(fetchUrl, settings);
            console.log(result);
            return result.data;
        } catch (err) {
            return err.response.data;
        }
    }

    async deleteSettings(id) {
        try {
            let fetchUrl = `${this.settingsUrl}delete?id=${id}`;
            let result = await axios.delete(fetchUrl);
            return result.data;
        } catch (err) {
            return err.response.data;
        }
    }

}