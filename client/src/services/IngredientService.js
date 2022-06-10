import BaseService from "./BaseService";
import axios from "axios";

export default class IngredientService extends BaseService {

    ingredientUrl = `${this.url}/ingredients/`

    async fetchIngredients(pageNumber = 0, pageSize = 100)  {
        try {
            let result = await axios.get(`${this.ingredientUrl}list?pageNumber=${pageNumber}&pageSize=${pageSize}`);
            return result.data;
        } catch (err) {
            return err.response.data;
        }
    };


    async fetchIngredient(id) {
        try {
            let fetchUrl = `${this.ingredientUrl}getById?id=${id}`;
            let result = await axios.get(fetchUrl);
            return result.data;
        } catch (err) {
            return err.response.data;
        }
    };

    async createIngredient(ingredient) {
        try {
            let fetchUrl = `${this.ingredientUrl}create`;
            let result = await axios.post(fetchUrl, ingredient);
            console.log(result);
            return result.data;
        } catch (err) {
            return err.response.data;
        }
    }

    async updateIngredient(ingredient) {
        try {
            let fetchUrl = `${this.ingredientUrl}update`;
            let result = await axios.post(fetchUrl, ingredient);
            console.log(result);
            return result.data;
        } catch (err) {
            return err.response.data;
        }
    }

    async deleteIngredient(id) {
        try {
            let fetchUrl = `${this.ingredientUrl}delete?id=${id}`;
            let result = await axios.delete(fetchUrl);
            return result.data;
        } catch (err) {
            return err.response.data;
        }
    }
}