import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {connect} from "react-redux";
import {useState} from "react";


const mapStateToProps=(state)=>{
    return{
        projects:state.project.projects
    }
}
const ProjectSelector=(props)=>{
    const [project, setProject] = React.useState({});
    const [proId,setProid]=useState('')
    const handleChange = (event: SelectChangeEvent) => {
        setProject(event.target.value)
        console.log(project)
    };

    let value=0;
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select project</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={proId}
                    label="Project"
                    onChange={handleChange}
                >
                    {props.projects.map((x)=>{return(<MenuItem value={x}>{x.attributes.name}</MenuItem>)})}

                </Select>
            </FormControl>
        </Box>
    );
}
export default connect(mapStateToProps)(ProjectSelector)