import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import projectService from "../../Services/projects.services";
import {fetchClient} from "../Client/ClientSlice";
import {useSelector} from "react-redux";


const projects = localStorage.getItem("projects")
const initialState = projects ? {projects} : {
    projects: []
}
export const fetchProjectsByUserId = createAsyncThunk(
    "project/fetchProjectsByUserId",
    async (userid, thunkAPI) => {
        try {
            const response = await projectService.fetchProjectsByUserId(userid);

            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue();
        }
    }
);
export const addProject = createAsyncThunk(
    "project/addProject",
    async (project, thunkAPI) => {
        try {
            const response = await projectService.addProject(project);

            const userid = useSelector(state => state.user.user.id)


            return response;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue();
        }
    }
);
export const projectSlice = createSlice(
    {
        name: "project",
        initialState,
        reducers: {},
        extraReducers(builder) {
            builder
                .addCase(fetchProjectsByUserId.fulfilled, (state, action) => {
                    state.projects = action.payload;
                })
                .addCase(addProject.fulfilled, (state, action) => {
                    state.projects.push(action.payload);
                })


        },
    }
)

const projectsSelector = state => state.project
