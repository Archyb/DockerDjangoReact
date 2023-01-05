import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from "@mui/material/Grid";
import {useDispatch, useSelector} from "react-redux";
import {modifyPassword, modifyUser} from "../../features/User/AuthSlice";
import {useState} from "react";


const DialogChangePassword = (props) => {
    const [chngPassword, setChngPassword] = useState("")
    const [color, setColor] = useState("warning")
    const [match, setMatch] = useState(false)

    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user)
    const [defineUser, setDefineUser] = useState(user)
    const handleChange = (e) => {
        setDefineUser({...defineUser, password: e.target.value})
        setChngPassword(e.target.value)
    }
    const handleClose = () => {
        setMatch(false)
        props.setOpen(false);
    };

    const handleSubmit = () => {
        if (match) {
            dispatch(modifyPassword(chngPassword))
            dispatch(modifyUser(defineUser))
            props.setOpen(false);
        } else return (alert("Passwords do not match"))
    }

    const checkMatchingPassword = (value) => {
        chngPassword === value ? setMatch(true) : setMatch(false)
        chngPassword === value ? setColor("success") : setColor("warning")
        setDefineUser({...defineUser, password: value})
    }

    return (
        <div>
            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle> Change password</DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                required
                                id="password"
                                name="password"
                                label="New password"
                                fullWidth
                                autoComplete="given-name"
                                variant="standard"
                                onChange={event => handleChange(event)}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                required
                                id="rePassword"
                                label="Confirm password"
                                fullWidth
                                autoComplete="family-name"
                                variant="standard"
                                onChange={e => checkMatchingPassword(e.target.value)}
                                color={color}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit} disabled={!match}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>)
}
export default DialogChangePassword