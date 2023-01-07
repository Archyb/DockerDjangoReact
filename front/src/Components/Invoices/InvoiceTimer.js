import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import {useDispatch, useSelector} from "react-redux";
import {fetchInvoiceById, invoiceSlice} from "../../features/Invoice/InvoiceSlice";



const InvoiceTimer = (props) => {

    const ButtonStyle = {
        maxWidth: '100px', maxHeight: '100px', minWidth: '100px', minHeight: '100px'
    }
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);
    const invoice = useSelector(state => state.invoice.invoice)

    useEffect(() => {
        let interval = null;
        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    const handleAddCurrentInvoice = () => {
        const newInvoice = {
            ...invoice,
            hour_spend: invoice.hour_spend + time
        }
        console.log(newInvoice)
        invoiceSlice.updateInvoice(newInvoice)
    }


    return (
        <Paper>
        <span>
        <Typography variant="h6">
             Temps accumulé sur le projet : {props.project.name}
        </Typography>
        <Typography variant="h2">
            <span>{("0" + Math.floor(invoice.hour_spend / 3600)).slice(-2)}:</span>
            <span>{("0" + Math.floor((invoice.hour_spend % 3600) / 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor(invoice.hour_spend % 60)).slice(-2)}</span>
        </Typography>
            <Typography variant="h2">
            <IconButton>
                <Button variant="contained" color="success" style={ButtonStyle}
                        onClick={handleStart}>Start</Button>
            </IconButton>
            <IconButton>
                <Button variant="contained" color="error" style={ButtonStyle}
                        onClick={handlePauseResume}>Stop</Button>
            </IconButton>
            <IconButton>
                <Paper>
                    <Button variant="outlined" color="error" style={ButtonStyle}
                            onClick={handleReset}>Reset</Button>
                </Paper>
            </IconButton>
            </Typography>

            
            <Typography variant="h3">
                <span>{("0" + Math.floor(time / 3600)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time % 3600) / 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor(time % 60)).slice(-2)}</span>
            </Typography>
            <IconButton>
                <Paper>
                    <Button variant="outlined" color="error" style={ButtonStyle}
                            onClick={handleAddCurrentInvoice}>add Current Invoice</Button>
                </Paper>
            </IconButton>
              <IconButton>
                <Paper>
                    <Button variant="outlined" color="error" style={ButtonStyle}
                            onClick={handleReset}>End of Project</Button>
                </Paper>
            </IconButton>
        </span>
        </Paper>
    )
}
export default InvoiceTimer