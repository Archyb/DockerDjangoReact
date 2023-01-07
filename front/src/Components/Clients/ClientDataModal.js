import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import * as React from "react";
import Divider from "@mui/material/Divider";





const DialogClientDataModal= (props) => {


    const handleSubmit = (event) => {
        event.preventDefault();

        handleClose()
    };
    const handleClose = () => {
        props.setOpen(false);
    };


    return (
        <div>

            <Dialog open={props.open} onClose={handleClose} >

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
                        {props.client.tel}
                    </Grid>
                </Grid>


                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>)
}
export default DialogClientDataModal;