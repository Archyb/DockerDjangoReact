import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {connect} from "react-redux";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import DialogChangeProfile from "../Components/Profil/DialogChangeProfile";
import DialogChangePrice from "../Components/Profil/DialogChangePrice";
import DialogChangePassword from "../Components/Profil/DialogChangePassword";
import {useSelector} from 'react-redux'
import Box from "@mui/material/Box";

const mapStateToPros = (state) => {
    return {user: state.auth.user}
}

const Profile = (props) => {

    const [changePrice, setChangePrice] = useState(false)
    const [changeUserInfo, setChangeUserInfo] = useState(false)
    const [changePassword, setChangePassword] = useState(false)
    const user = useSelector((state) => state.auth.user)

    const handleOpenChangeInfoModalForm = () => {
        setChangeUserInfo(true)
    }
    const handleOpenChangePriceModalForm = () => {
        setChangePrice(true)
    }
    const handleOpenPasswordModalForm = () => {
        setChangePassword(true)
    }

    useEffect(()=>{},[user])
    return (<Grid container spacing={4}>
        <Grid item xs={12} display={"flex"} direction="row" height={"100%"}>

            <Grid item xs={3}
                  container
                  height={750}
                  direction="column"
                  alignItems="flex-start"
                  component='main'
                  bgcolor={'white'}
                  pt={3}
                  sx={{pl:2}}
                  minWidth={100}
            >


                <Box>
                    <Typography>
                        <strong>First name:</strong><span><br/>{user.firstname}</span>
                    </Typography>
                    <Typography>
                        <strong>last name:</strong><span><br/>{user.lastname}</span>
                    </Typography>
                    <Typography>
                        <strong>username:</strong><span><br/>{user.username}</span>
                    </Typography>
                    <Typography>
                        <strong>Current price per
                            hour:</strong><span><br/>{user.price + " .-chf"}</span>
                    </Typography>
                    <Divider/>
                    <Button onClick={handleOpenChangeInfoModalForm}>Change information</Button>
                    <DialogChangeProfile open={changeUserInfo} setOpen={setChangeUserInfo}/>
                    <Button onClick={handleOpenChangePriceModalForm}>Change Price</Button>
                    <DialogChangePrice open={changePrice} setOpen={setChangePrice}/>
                    <Button onClick={handleOpenPasswordModalForm}>Change Password</Button>
                    <DialogChangePassword open={changePassword} setOpen={setChangePassword}/>
                </Box>
            </Grid>
            <Grid item xs={9} container height={750} direction="column">

            </Grid>
        </Grid>
    </Grid>)
}
export default connect(mapStateToPros)(Profile)