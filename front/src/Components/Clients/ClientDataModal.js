import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import Divider from "@mui/material/Divider";
import {useEffect} from "react";




const DialogClientDataModal= (props) => {


    const handleSubmit = (event) => {
        event.preventDefault();
    };


    const handleChange = (event) => {
    };
    
    const handleClose = () => {
        props.setOpen(false);
    };


    console.log(props.client)

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
                        {props.client.firstname}
                    </Grid>

                    <Grid sm={12} sx={{mt: 3}}>
                        <Typography variant="subtitle1" component="div">
                            Lastname</Typography>
                        {props.client.lastname}
                    </Grid>
                    <Grid sm={12} sx={{mt: 3}}>
                        <Typography variant="subtitle1" component="div">
                            Mail</Typography>
                        {props.client.mail}
                    </Grid>

                    <Grid sm={12} sx={{mt: 3}}>
                        <Typography variant="subtitle1" component="div">
                            Phone</Typography>
                        {props.client.phone}
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