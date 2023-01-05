import {connect} from "react-redux";
import ClientTab from "../Components/Clients/ClientTab";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {useEffect, useState} from "react";
import {reserialize} from "../helpers/transformations";
import Container from "@mui/material/Container";
import DialogFormClient from "../Components/Clients/DialogFormClient";
import Button from "@mui/material/Button";
import {useSelector} from 'react-redux'

const mapStateToProps = (state) => {
    return {clients: state.client.clients}
}


const Client = (props) => {
    const clients=useSelector(state=>state.client.clients)
    const handleOpenModalForm = () => {
        setAddClient(true)
    }
    const [addClient, setAddClient] = useState(false)



    return (

            <Grid container spacing={4}>
                <Grid item xs={12} spacing={4}>
                    <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                        <Button variant="contained" color="primary" onClick={handleOpenModalForm}>Add Client</Button>
                        <DialogFormClient open={addClient} setOpen={setAddClient}/>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                        <ClientTab rows={clients}/>
                    </Paper>
                </Grid>


            </Grid>
     
    )
}

export default connect(mapStateToProps)(Client)