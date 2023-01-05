import Chart from "../Chart";
import {useEffect, useState} from "react";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        clients: state.client.clients,
        projects: state.project.projects,
        user: state.auth.user
    }
}
const ProfilCharts = (props) => {

    const [clientsNb, setClientsNb] = useState(0)
    const [projectNb, setProjectNb] = useState(0)

    const calcInvoice = () => {
        let sum = 0
        for (const i in props.projects) {
            if (!i.isOver) {
                sum += props.projects[i].relationships.invoice.data.id
            }
        }
        return sum
    }
    useEffect(() => {
        calcInvoice()
        setClientsNb(props.clients.length)
        setProjectNb(props.projects.length)
    }, [props.clients, props.project, props.user])


    const data = [
        {
            name: 'My statistics',
            Projects: 12,
            Clients: clientsNb,
            CurrentEarnings: calcInvoice(),
            GlobalEarnings: props.user.attributes.globalEarnings
        }

    ];

    const legend = [{dataKey: "Projects", fill: "blue"}]
  return(<Chart data={data} legend={legend}></Chart>)
}
export  default connect(mapStateToProps)(ProfilCharts)