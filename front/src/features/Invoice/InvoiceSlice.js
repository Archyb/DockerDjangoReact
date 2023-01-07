import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import invoiceService from "../../Services/invoice.service";

const initialState = {
    invoices: [], invoice: []
}

export const fetchAllInvoices = createAsyncThunk(
    "invoice/getAllInvoice",
    async (userID, thunkAPI) => {
        try {

            const response = await invoiceService.fetchUserInvoice(userID)
            console.log(response)
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const fetchInvoiceById = createAsyncThunk("invoice/getInvoiceById", async (projectID, thunkAPI) => {
    try {
        const response = await invoiceService.getInvoiceById(projectID);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue("not found");
    }
})

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
                .addCase(fetchInvoiceById.fulfilled, (state, action) => {
                    state.invoice = action.payload;  
                })
        }
    })

    export const {addInvoice, deleteInvoice, updateInvoice} = invoiceSlice.actions;

