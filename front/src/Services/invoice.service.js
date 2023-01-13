import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

const fetchUserInvoice = async (userId) => {
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

const getInvoiceById = (id) => {
    return axios
        .get(API_URL + "invoices/" + id + "/")
        .then((response) => {
            const invoice=response.data
            return invoice
        });
};

const invoiceService = {
    fetchUserInvoice,
    getInvoiceById
}

export const modifyInvoice = (invoice) => {

    const inv = {
        hour_spend: invoice.hour_spend,
        invoice_value: invoice.invoice_value,
    }

    return axios
        .put(API_URL + "invoices/" + invoice.id + "/",inv)
        .then((response) => {
            console.log(response)
        })
}


export default invoiceService