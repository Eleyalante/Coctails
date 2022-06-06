import BaseService from "./BaseService";
import axios from "axios";

export default class CocktailService extends BaseService {
    ingredientUrl = `https://jsonplaceholder.typicode.com/posts`;

    async fetchCocktails() {
        try {
            let result = await axios.get(`${this.ingredientUrl}`);
            // console.log(result.data);
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
