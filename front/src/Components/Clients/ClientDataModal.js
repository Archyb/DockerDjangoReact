import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import Divider from "@mui/material/Divider";
import clientServices from "../../Services/client.services";
import {useEffect} from "react";
import {setClientInUse} from "../../features/Client/ClientSlice";



const DialogClientDataModal= (props) => {


    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();


    };


    const handleChange = (event) => {

    };
    const handleClose = () => {
        props.setOpen(false);
    };

    const Client=useSelector(state => state.client.clientInUse);


    return (
        <div>

            <Dialog open={props.open} onClose={handleClose} fullScreen={true}>

                <DialogContent>

                <Grid container={true} spacing={2}>


                    <Grid sm={12} item={true}>
                        <Typography variant="h6" component="div">
                            Client informations
                        </Typography>
                        <Divider/>
                    </Grid>

                    <Grid sm={12} sx={{mt: 3}}>
                        <Typography variant="subtitle1" component="div">
                            Firstname</Typography>
                        {Client.firstname}
                    </Grid>

                    <Grid sm={12} sx={{mt: 3}}>
                        <Typography variant="subtitle1" component="div">
                            Lastname</Typography>
                        {Client.firstname}
                    </Grid>
                    <Grid sm={12} sx={{mt: 3}}>
                        <Typography variant="subtitle1" component="div">
                            Mail</Typography>
                        {Client.firstname}
                    </Grid>

                    <Grid sm={12} sx={{mt: 3}}>
                        <Typography variant="subtitle1" component="div">
                            Phone</Typography>
                        {Client.firstname}
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
export default DialogClientDataModal;