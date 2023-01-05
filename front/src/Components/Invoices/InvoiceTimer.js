import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";


const InvoiceTimer = (props) => {

    const ButtonStyle = {
        maxWidth: '100px', maxHeight: '100px', minWidth: '100px', minHeight: '100px'
    }
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval = null;
        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
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
    return (
        <Paper>
        <span>
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


                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </Typography>
            <IconButton>
                <Paper>
                    <Button variant="outlined" color="error" style={ButtonStyle}
                            onClick={handleReset}>add Current Invoice</Button>
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