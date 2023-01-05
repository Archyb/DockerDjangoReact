import GridGenric from "../GridGenric";
import Button from "@mui/material/Button";
import {GridColDef} from "@mui/x-data-grid";

import {useEffect, useState} from "react";
import ClientServices from "../../Services/client.services";
import {useDispatch} from "react-redux";


const ProjectTab = (props) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(0)


    useEffect(() => {


    }, [open])
    const handleClickOpen = (id) => {
        setOpen(true);
        setId(id)
        console.log(id)
    };

    const handleClose = () => {
        setOpen(false);
    }


    const getClient = (id) => ClientServices.getCLientById(id)


    const projectColumns: GridColDef[] = [
        {field: 'id', headerName: 'ID', width: 90},
        {
            field: 'name',
            headerName: 'Project name',
            width: 160,
            editable: false,
        },
        {
            field: 'technology',
            headerName: 'Technologie',
            width: 160,
            editable: false,
        },
        {
            field: 'description',
            headerName: 'Description',
            width:600,
            editable: false,
        },


    ];
    return (


            <GridGenric rows={props.rows} columns={projectColumns}/>
   )
}
export default ProjectTab