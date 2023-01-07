import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import * as React from "react";
import InvoiceTimer from "./InvoiceTimer";


const DialogInvoice = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();

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