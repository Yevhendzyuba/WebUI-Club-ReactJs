import axios from "axios";

export default class Server{
    static async getAll(){
        const response = await axios.get('http://localhost:8080/');
        return response.data;
    }
}