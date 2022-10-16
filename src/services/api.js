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

function signIn(body) {
    const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/signin`, body);
    return promise;
}

function getRankings() {
    const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/ranking`);
    return promise;
}

function getUser() {
    const config = createHeaders();
    const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/users/me`, config);
    return promise;
}

function postUrl(body) {
    const config = createHeaders();
    const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/urls/shorten`, body, config);
    return promise;
}

export {
    signUp,
    signIn,
    getRankings,
    getUser,
    postUrl
}