
import {DataGrid, GridColDef, GridToolbar} from "@mui/x-data-grid";

import {useEffect, useState} from "react";
import ClientServices from "../../Services/client.services";
import {useDispatch} from "react-redux";
import Container from "@mui/material/Container";
import {fetchProjectInUse} from "../../features/Projects/ProjectSlice";


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

   const handleChange = (event) => {
    setId(event.row.id)
       console.log(event.row.id)
    dispatch(fetchProjectInUse(event.row.id))
    }

    const getClient = (id) => ClientServices.getCLientById(id)
    useEffect(() => {}, [props.rows,id,handleChange])

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
        <Container style={{height:500, width: '100%'}}>

            <DataGrid components={{Toolbar: GridToolbar}}
                      getRowId={(row) => row.id}
                      rows={props.rows}
                      columns={projectColumns}
                      pageSize={10}
                      rowsPerPageOptions={[10]}
                      onRowClick={(e) => {
                        handleChange(e)
                      }}
            />

        </Container>
   )
}
export default ProjectTab