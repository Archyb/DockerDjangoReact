import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import ClientServices from "../../Services/client.services";

const initialState = {clients: [], clientInUse: {}, allClients: []};

export const addClient = createAsyncThunk("client/AddClient",
    async (client, thunkAPI) => {
        try {
            const response = await ClientServices.addClientDb(client);
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue();
        }
    }
)


export const fetchClient = createAsyncThunk(
    "client/fetchClient",
    async (userID, thunkAPI) => {
        try {

            const response = await ClientServices.fetchClientsByUserId(userID)
            return response
        } catch (error) {

            return thunkAPI.rejectWithValue(error);
        }
    }
)


export const getAllClients = createAsyncThunk(
    "client/getAllClients",
    async (userID, thunkAPI) => {
        try {

            const response = await ClientServices.getAllClients()
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
export const clientSlice = createSlice(
    {
        name: "client",
        initialState,
        reducers: {
            setClients: (state, action) => {
                state.clients = action.payload
            },
            clearClientInUse: (state, action) => {
                state.clientInUse = {}
            },
            addClientState(state, action) {

            },
            getClientByid(state, action) {
                state.clientInUse = state.allClients.filter(client => client.id === action.payload)[0]
            },


        },
        extraReducers(builder) {
            builder
                .addCase(fetchClient.fulfilled, (state, action) => {
                    state.clients = action.payload
                })
                .addCase(getAllClients.fulfilled, (state, action) => {
                    state.allClients = action.payload
                })
                .addCase(addClient.fulfilled, (state, action) => {
                    state.allClients.push(action.payload)
                })




        }
    }
)

export const {setClients, clearClientInUse, addClientState, getClientByid} = clientSlice.actions

