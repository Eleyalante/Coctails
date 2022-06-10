import BaseService from "./BaseService";
import axios from "axios";

export default class CategoryService extends BaseService{


    categoryUrl = `${this.url}/categories/`;

    async fetchCategories(pageNumber = 0, pageSize = 100) {
        try {
            let result = await axios.get(`${this.categoryUrl}list?pageNumber=${pageNumber}&pageSize=${pageSize}`);
            return result.data;
        } catch (err) {
            return err.response.data;
        }
    };

    async fetchCategory(id) {
        try {
            let fetchUrl = `${this.categoryUrl}getById?id=${id}`;
            let result = await axios.get(fetchUrl);
            return result.data;
        } catch (err) {
            return err.response.data;
        }
    };
    async createCategory(category) {
        try {
            let fetchUrl = `${this.categoryUrl}create`;
            let result = await axios.post(fetchUrl, category);
            console.log(result);
            return result.data;
        } catch (err) {
            return err.response.data;
        }
    }

    async updateCategory(category) {
        try {
            let fetchUrl = `${this.categoryUrl}update`;
            let result = await axios.post(fetchUrl, category);
            console.log(result);
            return result.data;
        } catch (err) {
            return err.response.data;
        }
    }

    async deleteCategory(id) {
        try {
            let fetchUrl = `${this.categoryUrl}delete?id=${id}`;
            let result = await axios.delete(fetchUrl);
            return result.data;
        } catch (err) {
            return err.response.data;
        }
    }
}