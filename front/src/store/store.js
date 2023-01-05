import {configureStore} from '@reduxjs/toolkit'

import {authSlice} from "../features/User/AuthSlice";
import {projectSlice}from "../features/Projects/ProjectSlice"
import {clientSlice} from "../features/Client/ClientSlice";
import {invoiceSlice}from"../features/Invoice/InvoiceSlice"
export const store = configureStore({
    reducer: {
        auth:authSlice.reducer,
        project:projectSlice.reducer,
        client:clientSlice.reducer,
        invoice:invoiceSlice.reducer

    },
})

