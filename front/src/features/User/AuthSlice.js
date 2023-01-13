import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import AuthService from "../../Services/auth.services";
import {fetchProjectsByUserId} from "../Projects/ProjectSlice";
import {fetchAllInvoices} from "../Invoice/InvoiceSlice";
import {getAllClients} from "../Client/ClientSlice";


export const login = createAsyncThunk("auth/login", async ({username, password}, thunkAPI) => {

    try {
        const data = await AuthService.login(username, password);
        console.log(
            data.id
        )
        thunkAPI.dispatch(fetchProjectsByUserId(data.id));
        thunkAPI.dispatch(fetchAllInvoices(data.id));
        thunkAPI.dispatch(getAllClients());
        return {user: data};
    } catch (error) {
        return thunkAPI.rejectWithValue();
    }
});


export const modifyUser = createAsyncThunk("auth/modifyUser", async (user, thunkAPI) => {
    try {
        const data = await AuthService.modifyUser(user);
        return data

    } catch (error) {
        return thunkAPI.rejectWithValue();
    }
});
export const logout = createAsyncThunk("auth/logout", async () => {
    await AuthService.logout();
});

const initialState = {isLoggedIn: false, user: null};

export const authSlice = createSlice({
    name: "auth", initialState, reducers: {
        clearState: (state) => {
            state.isLoggedIn = false
            state.user = null
        },
        modifyPrice: (state, action) => {

            state.user.price = action.payload
        },
        modifyPassword: (state, action) => {
            state.user.password = action.payload
        },
        modifyUserInfo(state, action) {
            state.user = action.payload
        }
    }, extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
        }, [login.pending]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        }, [login.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        }, [logout.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        }

    },
});

export const {clearState, modifyPrice, modifyPassword, modifyUserInfo} = authSlice.actions
export const authSelector = state => state.auth
