import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {useEffect, useState} from "react";

const columns = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'firstname', headerName: 'First name', width: 130},
    {field: 'lastname', headerName: 'Last name', width: 130},

    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: "200",
        valueGetter: (params) =>
            `${params.row.firstname || ''} ${params.row.lastname || ''}`,
    },
];


export const DataTable = (props) => {

    const[id,setId]=useState(0);
    useEffect(()=>{
        props.setIdCLient(id);
    },[id])
    return (
        <div style={{height: 400, width: '100%'}}>
            <DataGrid
                rows={props.rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                onRowClick={e => {
                   setId(e.row.id)
                }}
            />
        </div>
    );
}
export default DataTable;