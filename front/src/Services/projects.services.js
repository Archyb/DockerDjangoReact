import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

const fetchProjectsByUserId = (userid) => {
    let project = {id: "", name: "", description: "", technology: "", isOver: ""};
    const projects = [];

    return axios
        .get(API_URL + "fetchproject?dev="+userid,)
        .then((response) => {
            response.data.map((i) => {
                const project = {
                    id: i.id,
                    name: i.name,
                    description: i.description,
                    technology: i.technology,
                    isOver: i.isOver,
                }
                projects.push(project);
            });
            return projects
        });
};

const addProject = (project) => {
    return axios
        .post(API_URL + "project/create", project, config)
        .then((response) => {
            return response.data;
        });
};

const getProjectById = (id) => {
    const projects = [];
    return axios
        .get(API_URL + "projects/" + id + "/")
        .then((response) => {
            const project=response.data
            const client=response.data.client
            const invoice=response.data.invoice
            return {project,client,invoice}
        })

}
const projectService = {
    fetchProjectsByUserId,
    addProject,
    getProjectById
}

export default projectService