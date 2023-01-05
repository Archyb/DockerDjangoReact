import {connect, useDispatch, useSelector} from "react-redux";

import GridGenric from "../Components/GridGenric";
import {invoiceColumns} from "../Components/Invoices/InvoiceGridCol";
import {useEffect} from "react";

import {fetchAllInvoices} from "../features/Invoice/InvoiceSlice";




const Invoices = (props) => {

    const data= useSelector(state => state.invoice.invoices);
    // fetch all Invoice => rows
    return (
        <GridGenric rows={data}columns={invoiceColumns}/>
    )
}


export default (Invoices)