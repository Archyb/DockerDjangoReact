import {DataGrid, GridToolbar} from '@mui/x-data-grid';
import {useDemoData} from '@mui/x-data-grid-generator';
import {clientColumns} from "./ClientColumn";
import GridGenric from "../GridGenric";
import {GridRowsProp} from "@mui/x-data-grid";
import {useEffect, useState} from "react";

const ClientTab = (props) => {

    return (
        <GridGenric rows={props.rows} columns={clientColumns}/>
    )
}

export default ClientTab;




