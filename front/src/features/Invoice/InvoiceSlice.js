import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {invoiceService} from "../../Services/invoice.service";

const initialState = {
    invoices: [],
}

export const fetchAllInvoices = createAsyncThunk(
    "invoice/getAllInvoice",
    async (userID, thunkAPI) => {
        try {

            const response = await invoiceService.fetchUserInvoice(userID)
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
export const invoiceSlice = createSlice(
    {
        name: "invoice",
        initialState,
        reducers: {
            addInvoice: (state, action) => {
                state.invoices.push(action.payload);
            },
            deleteInvoice: (state, action) => {
                state.invoices = state.invoices.filter((invoice) => invoice.id !== action.payload);
            },
            updateInvoice: (state, action) => {
                state.invoices = state.invoices.map((invoice) => {
                    if (invoice.id === action.payload.id) {
                        return action.payload;
                    }
                    return invoice;
                });
            },
        },
        extraReducers(builder) {
            builder
                .addCase(fetchAllInvoices.fulfilled, (state, action) => {
                    state.invoices = action.payload;
                })
        }
    })

