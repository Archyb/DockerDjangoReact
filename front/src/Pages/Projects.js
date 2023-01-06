import {connect, useDispatch, useSelector} from "react-redux";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {useEffect, useState} from "react";
import ProjectTab from "../Components/Projects/ProjectTab";

import Button from "@mui/material/Button";
import DialogFormProject from "../Components/Projects/DialogFormProject";
import DialogInvoice from "../Components/Invoices/DialogInvoice";
import DialogClientDataModal from "../Components/Clients/ClientDataModal";
import {getClientByid, setClientInUse} from "../features/Client/ClientSlice";


const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        projects: state.project.projects
    }
}
const Projects = (props) => {
    const [projects, setProjects] = useState([])
    const [openInvoicemodal, setOpenInvoiceModal] = useState(false)
    const[openClientModal, setOpenClientModal] = useState(false)
    const [invoice, setInvoice] = useState({})
    const [client, setClient] = useState({})
    const dispatch = useDispatch()
    const handleOpenModalForm = () => {
        setAddProject(true)
    }
    const handleOpenInvoice = () => {
        setOpenInvoiceModal(true)
    }

    //use selector user id
    const handleOpenClient = () => {
        setOpenClientModal(true)
        dispatch(getClientByid(15));
    }
    const [addProject, setAddProject] = useState(false)
    useEffect(() => {
        setProjects(props.projects)
      
    }, [props.projects])
    const projectInUse=useSelector(state=>state.project.projectInUse);
    console.log("invoice:"+projectInUse.invoice)
    console.log("client"+projectInUse.client)
    return (

        <Grid container spacing={4}>
            <Grid item xs={12} spacing={4}>
                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                    <Button variant="contained" color="primary" onClick={handleOpenModalForm}>Add Project</Button>
                    <DialogFormProject open={addProject} setOpen={setAddProject}/>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                    <ProjectTab rows={projects}/>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper sx={{p: 10, display: 'flex', flexDirection: 'column'}}>
                    <Button variant="contained" color="primary" onClick={handleOpenInvoice}>Check Invoice</Button>
                    <DialogInvoice open={openInvoicemodal} setOpen={setOpenInvoiceModal}/>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper sx={{p: 10, display: 'flex', flexDirection: 'column'}}>
                    <Button variant="contained" color="primary" onClick={handleOpenClient}>Check Client</Button>
                    <DialogClientDataModal open={openClientModal} setOpen={setOpenClientModal}/>
                </Paper>
            </Grid>
        </Grid>)
}


export default connect(mapStateToProps)(Projects)