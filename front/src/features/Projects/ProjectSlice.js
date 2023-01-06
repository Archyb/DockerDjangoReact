import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import projectService from "../../Services/projects.services";

import {useSelector} from "react-redux";


const initialState = {
    projects: [], projectInUse: {}
}
export const fetchProjectsByUserId = createAsyncThunk(
    "project/fetchProjectsByUserId",
    async (userid, thunkAPI) => {
        try {
            const response = await projectService.fetchProjectsByUserId(userid);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue();
        }
    }
);
export const addProject = createAsyncThunk(
    "project/addProject",
    async (project, thunkAPI) => {
        try {
            const response = await projectService.addProject(project);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue("not added");
        }
    }
);
export const fetchProjectInUse = createAsyncThunk("project/fetchProjectInUse", async (projectID, thunkAPI) => {
    try {
        const response = await projectService.getProjectById(projectID);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue("not found");
    }
})
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
                .addCase(fetchProjectInUse.fulfilled, (state, action) => {
                    state.projectInUse = action.payload;
                })


        },
    }
)

const projectsSelector = state => state.project
