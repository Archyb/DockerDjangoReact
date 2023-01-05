import {GridColDef} from "@mui/x-data-grid";
import {Button} from "@mui/material";
import * as React from "react";

export const clientColumns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 90},
    {
        field: 'firstname',
        headerName: 'First name',
        width: 160,
        editable: false,
    },
    {
        field: 'lastname',
        headerName: 'Last name',
        width: 160,
        editable: false,
    },
    {
        field: 'mail',
        headerName: 'Mail',
        type: 'mail',
        width: 160,
        editable: false,
        renderCell: (params) => (
            <a href={`${params.value}`}>{params.value}</a>
        )
    },

    {
        field: 'urls',
        headerName: 'Projects',
        type: 'Tel',
        width: 160,

        renderCell: (params) => (
            <Button variant="outlined"href={`${params.value}`}>Project</Button>
        )
    },
    {
        field: 'projects',
        headerName: 'Projects',
        type: 'Tel',
        width: 160,

        renderCell: (params) => (
            <Button variant="contained" href={`${params.value}`}>Facture</Button>
        )
    }
];