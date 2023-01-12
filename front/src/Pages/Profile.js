import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import DialogChangeProfile from "../Components/Profil/DialogChangeProfile";
import DialogChangePrice from "../Components/Profil/DialogChangePrice";
import DialogChangePassword from "../Components/Profil/DialogChangePassword";
import { useSelector } from 'react-redux'
import Box from "@mui/material/Box";
import { Block, Image } from "@mui/icons-material";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Chart from "../Components/Chart";
import ListItemButton from "@mui/material/ListItemButton";

const mapStateToPros = (state) => {
    return { user: state.auth.user }
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

    const [image, setImage] = useState(null)
    const [stats, setStats] = useState({})
    const data = Object.values(stats)
    const legend = Object.keys(stats)

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        axios.get('https://xsgames.co/randomusers/avatar.php?g=male')
            .then(res => {
                setImage(res.request.responseURL)
            })
        axios.get('http://127.0.0.1:8000/api/stats?dev=' + user.id).then(r => {
            setStats(r.data)
        })

    }, [user])
    return (
        <Grid sx={{ m: 0 }} display={"flex"} direction="row" alignItems={"start"}>
            <Grid item xs={3} height={750} pt={3} sx={{ p: 2, }} minWidth={110}>
                <Paper sx={{ alignItems: "center", p: 3, height: "100%" }}>
                    <Avatar
                        variant="square"    
                        alt="Remy Sharp"
                        src={image}
                        sx={{ alignSelf: "center", width: 140, height: 140, mb: 2, borderColor: "ActiveBorder black", borderWidth: 12 }}
                    />

                    <Typography variant="p" sx={{ alignSelf: "center" }}> {capitalizeFirstLetter(user.firstname) + " " + capitalizeFirstLetter(user.lastname)}</Typography>
                    <Typography sx={{ mt: 2 }}>actual price:{user.price}</Typography>
                    <Divider sx={{ mt: 4 }} />
                    <Typography variant="h6">Changes infos</Typography>
                    <Divider sx={{}} />
                    <Button onClick={handleOpenChangeInfoModalForm} sx={{ borderColor: "primary" ,display:"block"}}fullWidth={true}>Information</Button>
                    <DialogChangeProfile open={changeUserInfo} setOpen={setChangeUserInfo} />
                    <Button onClick={handleOpenChangePriceModalForm} sx={{ borderColor: "primary" ,display:"block"}}fullWidth={true}>Price</Button >
                    <DialogChangePrice open={changePrice} setOpen={setChangePrice} />
                    <Button  color={"secondary"} onClick={handleOpenPasswordModalForm}sx={{ borderColor: "primary" ,display:"block"}}fullWidth={true}>Password</Button >
                    <DialogChangePassword open={changePassword} setOpen={setChangePassword} />
                    <Button  sx={{ borderColor: "primary" ,display:"block"}}fullWidth={true} >Picture</Button >
                    <Divider sx={{ mt: 4 }} />
                </Paper>
            </Grid>
            <Grid item xs={9} sx={{ m: 2 }} container height={750} direction="column" >
                <Chart data={data} legend={legend} name="" />

            </Grid>
        </Grid>
    )
}
export default connect(mapStateToPros)(Profile)