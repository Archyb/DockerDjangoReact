import {useSelector} from "react-redux";

import GridGenric from "../Components/GridGenric";
import {invoiceColumns} from "../Components/Invoices/InvoiceGridCol";





const Invoices = (props) => {

    const data= useSelector(state => state.invoice.invoices);
    // fetch all Invoice => rows
    return (
        <GridGenric rows={data}columns={invoiceColumns}/>
    )
}


export default (Invoices)