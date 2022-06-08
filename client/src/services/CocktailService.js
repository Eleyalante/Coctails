import BaseService from "./BaseService";
import axios from "axios";

export default class CocktailService extends BaseService {
    cocktailUrl = `${this.url}/cocktails/`;

    async fetchCocktails() {
        try {
            let result = await axios.get(`${this.cocktailUrl}/all`);
            return result.data;
        } catch (err) {
            return err.response.data;
        }
    }

    async createCocktail(cocktail) {
        try {
            let fetchUrl = `${this.cocktailUrl}create`;
            let result = await axios.post(fetchUrl, cocktail);
            console.log(result);
            return result.data;
        } catch (err) {
            return err.response.data;
        }
    }

    async updateCocktail(cocktail) {
        try {
            let fetchUrl = `${this.cocktailUrl}update`;
            let result = await axios.post(fetchUrl, cocktail);
            console.log(result);
            return result.data;
        } catch (err) {
            return err.response.data;
        }
    }

    async fetchCocktail(id) {
        try {
            let fetchUrl = `${this.cocktailUrl}getById?id=${id}`;
            let result = await axios.get(fetchUrl);
            return result.data;
        } catch (err) {
            return err.response.data;
        }
    }

    async deleteCocktail(id) {
        try {
            let fetchUrl = `${this.cocktailUrl}delete?id=${id}`;
            let result = await axios.delete(fetchUrl);
            return result.data;
        } catch (err) {
            return err.response.data;
        }
    }
}
