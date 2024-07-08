import axios from "axios";

export default class AuthService {
    register(values) {
        return axios.post("http://localhost:9002/api/" + "auth/register", values);
    }
    login(values) {
        return axios.post("http://localhost:9002/api/" + "auth/authenticate", values);
    }
}
