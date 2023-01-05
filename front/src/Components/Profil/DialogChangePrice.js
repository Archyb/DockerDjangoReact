import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {connect, useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import { modifyPrice, modifyUser} from "../../features/User/AuthSlice";


const DialogChangePrice = (props) => {
    const dispatch = useDispatch()
    const userStore = useSelector((state) => state.auth.user)
    const [defineUser, setDefineUser] = useState(userStore)
    const [price, setPrice] = useState(userStore.price)
    const handleClose = () => {
        props.setOpen(false);
    };

    const handleChange = (e) => {
        setDefineUser({...defineUser, [e.target.name]: e.target.value})
        setPrice(e.target.value)
    }
    const handleSubmit = () => {
        dispatch(modifyPrice(price))
        dispatch(modifyUser(defineUser))
        props.setOpen(false);
    }


    return (
        <div>

            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle>Change your price per hour</DialogTitle>
                <DialogContent>
                    <Typography variant="h6" gutterBottom>
                        Current price: {userStore.price}
                    </Typography>
                    <Grid container spacing={2}>

                        <Grid item xs={6} sm={6}>
                            <TextField
                                required
                                id="price"
                                name="price"
                                label="Price Value .chf"
                                fullWidth
                                variant="standard"
                                onChange={event => handleChange(event)}

                            />
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
export default (DialogChangePrice)