import BaseService from "./BaseService";
import axios from "axios";

export default class CocktailService extends BaseService {
    ingredientUrl = `https://jsonplaceholder.typicode.com/posts`;
    cocktailUrl = `${this.url}/cocktails/`;

    async fetchCocktails() {
        try {
            let result = await axios.get(`${this.ingredientUrl}`);
            // console.log(result.data);
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

    // async fetchIngredient(id) {
    //     try {
    //         let fetchUrl = `${this.ingredientUrl}getById?id=${id}`;
    //         let result = await axios.get(fetchUrl);
    //         return result.data;
    //     } catch (err) {
    //         return err.response.data;
    //     }
    // }
}
