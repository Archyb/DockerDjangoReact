import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};
const addClientDb = (client) => {
    return axios.post(API_URL + "client/create", client, config)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
        });

};

const getCLientById = async (id) => {

    await axios
    const clients ={}

    return axios
        .get(API_URL + "clients/" + id + "/")
        .then((response) => {

            const i = response.data
            const client = {
                id: i.id,
                firstname: i.firstname,
                lastname: i.lastname,
                mail: i.mail,
                tel: i.tel,
                url: i.url,
            }
        return client
        })

}

const getAllClients = async () => {
    let clients = [];
    const projects = [];
    return axios
        .get(API_URL + "clients/")
        .then((response) => {
            response.data.map((i,) => {
                const client = {
                    id: i.id,
                    firstname: i.firstname,
                    lastname: i.lastname,
                    mail: i.mail,
                    tel: i.tel,
                    url: i.url,
                }
                clients.push(client);
            })

            return clients;
        });
}
const fetchClientsByUserId = (userid) => {

    let clients = [];
    return axios
        .get(API_URL + "fetchuserclient/?dev=" + userid,)
        .then((response) => {
            response.data.map((i,) => {
                const client = {
                    id: i.id,
                    firstname: i.firstname,
                    lastname: i.lastname,
                    mail: i.mail,
                    tel: i.tel,
                    url: i.url,
                }
                if(!clients.includes(client)) {
                    clients.push(client);
                }

            })

            return clients;
        });


};
const ClientServices = {addClientDb, getCLientById, fetchClientsByUserId, getAllClients}
export default ClientServices