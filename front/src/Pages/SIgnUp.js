import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Register} from "../Services/auth.services";
import {useEffect} from "react";


export default function SignUp() {

    const isNotNull = (attribute) => attribute != ""
    const [isRegister, setIsRegister] = React.useState(false)
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const user = {
            firstname: data.get('firstname'),
            lastname: data.get('lastname'),
            username: data.get('email'),
            password: data.get('password'),
            price: 0,
            globalEarning: 0,

        };

        const attributes = [user.firstname, user.lastname, user.username, user.password]
        if (attributes.every(isNotNull)) {
            Register(user).then(r => setIsRegister(r))

        } else {
            alert("Tous les champs sont obligatoires")
        }
        console.log(isRegister)

    };

    useEffect(() => {
        if (isRegister) {
            window.location.href = "/"
        }
    }, [isRegister])
    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstname"
                                required
                                fullWidth
                                id="firstname"
                                label="Firstname"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastname"
                                label="Lastname"
                                name="lastname"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </Container>

    );
}