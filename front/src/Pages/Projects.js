import {connect, useDispatch, useSelector} from "react-redux";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {useEffect, useState} from "react";
import ProjectTab from "../Components/Projects/ProjectTab";

import Button from "@mui/material/Button";
import DialogFormProject from "../Components/Projects/DialogFormProject";
import DialogInvoice from "../Components/Invoices/DialogInvoice";
import DialogClientDataModal from "../Components/Clients/ClientDataModal";
import {fetchClientInUse, getClientByid, setClientInUse} from "../features/Client/ClientSlice";
import clientServices from "../Services/client.services";
import {invoiceService} from "../Services/invoice.service";
import {fetchInvoiceById, invoiceSlice} from "../features/Invoice/InvoiceSlice";



const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        projects: state.project.projects,
        project: state.project.projectInUse,
        client: state.client.clientInUse
    }
}
const Projects = (props) => {

    const [projects, setProjects] = useState([])
    const [project, setProject] = useState({})
    const [client, setClient] = useState({})

    const [openInvoicemodal, setOpenInvoiceModal] = useState(false)
    const[openClientModal, setOpenClientModal] = useState(false)



    const dispatch = useDispatch()

    const handleOpenModalForm = () => {
        setAddProject(true)
    }

    const handleOpenInvoice = () => {
        setOpenInvoiceModal(true)
        setProject(props.project)
        dispatch(fetchInvoiceById(props.project.invoice))
    }

    //use selector user id
    const handleOpenClient = () => {
        setOpenClientModal(true)
        setClient(props.client);
    }

    const [addProject, setAddProject] = useState(false)
    useEffect(() => {
        setProjects(props.projects)
    }, [props.projects])

    //console.log(currentClient)
    //console.log(projects)
    //console.log(props.project)
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
                    <DialogInvoice open={openInvoicemodal} setOpen={setOpenInvoiceModal} project={project} />
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper sx={{p: 10, display: 'flex', flexDirection: 'column'}}>
                    <Button variant="contained" color="primary" onClick={handleOpenClient}>Check Client</Button>
                    <DialogClientDataModal open={openClientModal} setOpen={setOpenClientModal } client={client}/>
                </Paper>
            </Grid>
        </Grid>)
}


export default connect(mapStateToProps)(Projects)