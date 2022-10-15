import axios from "axios";

function createHeaders() {
    const auth = JSON.parse(localStorage.getItem("shortly"));
    const config = {
        headers: {
        Authorization: `Bearer ${auth.token}`,
        },
    };

    return config;
}

function signUp(body) {
    const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/signup`, body);
    return promise;
}

function signIp(body) {
    const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/signin`, body);
    return promise;
}

function getRankings() {
    const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/rankings`);
    return promise;
}

export {
    signUp,
    signIp,
    getRankings
}