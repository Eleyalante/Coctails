import BaseService from "./BaseService";
import axios from "axios";

export class IngredientService extends  BaseService{

      async fetchIngredients() {
        try {
            let result = await axios.get(`${this.url}/ingredients/all`);
            return result.data;
        } catch (err) {
            return err;
        }
    };


    async fetchIngredient(id) {
        try {
            let fetchUrl = `${this.url}/ingredients/getById?id=${id}`;
            let result = await axios.get(fetchUrl);
            return result.data;
        } catch (err) {
            return err;
        }
    };

    async createIngredient(ingredient){
        try {
            let fetchUrl = `${this.url}/ingredients/create`;
            let result = await axios.post(fetchUrl,ingredient);
            console.log(result);
            return result.data;
        } catch (err) {
            return err;
        }
    }
}