import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

const fetchstats = (userid) => {

    const stats = [];
    return axios
        .get(API_URL + "stats?dev=" + userid,)
        .then((response) => {
            return response.data
        });
};

export default fetchstats