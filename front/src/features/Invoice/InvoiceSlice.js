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
            return response
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const modifyInvoice = createAsyncThunk("invoice/modifyInvoice", async (invoice, thunkAPI) => {
    try {
        const data = await invoiceService.modifyInvoice(invoice);
        return data

    } catch (error) {
        return thunkAPI.rejectWithValue();
    }
});

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
            modifyTime: (state, action) => {
                state.invoice.time = action.payload;
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
                .addCase(modifyInvoice.fulfilled, (state, action) => {
                    state.invoices = state.invoices.map((invoice) => {
                        if (invoice.id === action.payload.id) {
                            return action.payload;
                        }
                        return invoice;
                    });
                })
        }
    })

    export const {addInvoice, deleteInvoice, updateInvoice, modifyTime} = invoiceSlice.actions;

