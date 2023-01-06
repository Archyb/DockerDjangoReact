import axios from "axios";

const fetchUserInvoice = async (userId) => {
    const invoice = {id: "", hour_spend: "", invoice_value: ""}
    const invoices = []


    return axios
        .get('http://127.0.0.1:8000/api/fetchinvoices?dev=' + userId,)
        .then((response) => {
            response.data.map((i) => {
                const invoice = {
                    hour_spend: i.hour_spend,
                    invoice_value: i.invoice_value,
                    id: i.id
                }
                invoices.push(invoice)


            });
            return invoices
        });
};
export const invoiceService = {fetchUserInvoice}