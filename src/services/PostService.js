import axios from "axios";

export default class PostService {
    add(values, token) {
        return axios.post("http://localhost:9002/api/" + "posts/create", values, {
            headers: {
                Authorization: "Bearer Token " + token,
            },
        });
    }

    getAllByUserId(userId, token) {
        return axios.get("http://localhost:9002/api" + "posts/" + userId, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
    }

    getAllByUserFollowing(userId, token) {
        return axios.get(process.env.REACT_APP_API + "posts/getbyuserfollowing/" + userId, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
    }

    getById(id, token) {
        return axios.get(process.env.REACT_APP_API + "posts/getbyid/" + id, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
    }
}
