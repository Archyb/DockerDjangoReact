import {connect, useDispatch} from "react-redux";
import ClientTab from "../Components/Clients/ClientTab";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {useEffect, useState} from "react";
import {reserialize} from "../helpers/transformations";
import Container from "@mui/material/Container";
import DialogFormClient from "../Components/Clients/DialogFormClient";
import Button from "@mui/material/Button";
import {useSelector} from 'react-redux'
import {fetchClient, getAllClients} from "../features/Client/ClientSlice";




const Client = (props) => {
    const dispatch = useDispatch();

    const clients=useSelector(state=>state.client.allClients);

    const handleOpenModalForm = () => {
        setAddClient(true)
    }
    const [addClient, setAddClient] = useState(false)

  useEffect(() => {
      dispatch(getAllClients);
  }, [clients]);

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

export default Client