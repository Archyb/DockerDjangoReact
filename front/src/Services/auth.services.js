import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};
export const Register = newUser => {
    const register=true;
    const error=false;
    return axios
        .post(API_URL + 'devs/', {
            firstname: newUser.firstname,
            lastname: newUser.lastname,
            username: newUser.username,
            price: newUser.price,
            globalEarnings: newUser.globalEarnings,
            password: newUser.password

        }, config)
        .then(response => {
           return  register
        })
        .catch(err => {
           return error
        })
}


const login = (username, password) => {
    return axios
        .get(API_URL + "auth/?username="+username+"&password="+password)
        .then((response) => {
            if (response.data.length === 0) {
                throw new Error('User not found');
            }
        return response.data[0]
        })
};


const logout = () => {
    localStorage.removeItem("user");
    localStorage.clear()
};

const modifyUser = (user) => {

    const usr = {
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        password: user.password,
        price: user.price,
        globalEarning: user.globalEarning
    }

    return axios
        .put(API_URL + "devs/" + user.id + "/", usr)
        .then((response) => {
            console.log(response)
        })
}
const AuthService = {
    Register,
    logout,
    login,
    modifyUser
};

export default AuthService