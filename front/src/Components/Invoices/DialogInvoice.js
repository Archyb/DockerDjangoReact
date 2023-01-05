import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import InvoiceTimer from "./InvoiceTimer";


const DialogInvoice = (props) => {


    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();


    };


    const handleChange = (event) => {

    };
    const handleClose = () => {
        props.setOpen(false);
    };


    return (
        <div>

            <Dialog open={props.open} onClose={handleClose} fullScreen={true}>

                <DialogContent>

                    <InvoiceTimer/>


                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>)
}
export default DialogInvoice