import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";


import DataTable from "./TableClientProject";
import {getAllClients} from "../../features/Client/ClientSlice";
import {addProject} from "../../features/Projects/ProjectSlice";

const DialogFormProject = (props) => {
    const [clients, setClients] = useState({});
    const [project, setProject] = useState({});
    const [clientId, setClientId] = useState(0);

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        setProject({...project, client: clientId})
        dispatch(addProject(project));
        props.setOpen(false);

    };


    const handleFilter = (event) => {
        event.preventDefault();
        const filteredData = clients.filter((client) => client.lastname.toLowerCase().includes(event.target.value.toLowerCase()))
        event.target.value.length > 0 ? setClients(filteredData) : setClients(data)

    };


    const handleChange = (event) => {
        setProject({
            ...project,
            [event.target.name]: event.target.value
        });
    };
    const handleClose = () => {
        props.setOpen(false);
    };

    const data = useSelector(state => state.client.allClients)
    const user = useSelector(state => state.auth.user)
    useEffect(() => {
        dispatch(getAllClients());
        setClients(data);
        setProject({...project, dev: user.id})
        console.log(clientId)
    }, [clientId])

    return (
        <div>

            <Dialog open={props.open} onClose={handleClose} fullScreen={true}>

                <DialogContent>
                    <Typography variant="h6" gutterBottom>
                        Project Details
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                required
                                id="Name"
                                name="name"
                                label="Name"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                                onChange={e => {
                                    handleChange(e)
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                required
                                id="technology"
                                name="technology"
                                label="Technology"
                                fullWidth
                                autoComplete="family-name"
                                variant="standard"
                                onChange={e => {
                                    handleChange(e)
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                id="description"
                                name="description"
                                label="description"
                                fullWidth
                                autoComplete="adresse mail"
                                multiline={true}
                                variant="standard"
                                onChange={e => {
                                    handleChange(e)
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="client"
                                name="client"
                                label="Search Client by firstanme"
                                fullWidth
                                autoComplete="client"
                                variant="standard"
                                onChange={e => {
                                    handleFilter(e)
                                }}/>
                            <DataTable rows={data} setIdCLient={setClientId} />

                        </Grid>


                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>)
}
export default DialogFormProject