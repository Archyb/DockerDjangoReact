import {GridColDef} from "@mui/x-data-grid";
import {Button} from "@mui/material";
import * as React from "react";

export const invoiceColumns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 90},
    {
        field: 'hour_spend',
        headerName: 'Hour spent',
        width: 300,
        editable: false,
    },
    {
        field: 'invoice_value',
        headerName: 'Value',
        width: 600,
        editable: false,
    },


];