import {GridColDef} from "@mui/x-data-grid";
import {Button} from "@mui/material";
import * as React from "react";

export const clientColumns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 90},
    {
        field: 'firstname',
        headerName: 'First name',
        width: 200,
        editable: false,
    },
    {
        field: 'lastname',
        headerName: 'Last name',
        width: 200,
        editable: false,
    },
    {
        field: 'mail',
        headerName: 'Mail',
        width: 300,
        editable: false,

    },
    {
        field: 'tel',
        headerName: 'Phone',

        width: 200,
        editable: false,

    }
];