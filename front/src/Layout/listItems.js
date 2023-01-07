import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CodeIcon from '@mui/icons-material/Dashboard';
import MoreTimeIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import Link from "@mui/material/Link";

export const mainListItems = (
    <React.Fragment>

        <ListItemButton component={Link} to="Clients">
            <ListItemIcon>
                <PeopleIcon/>
            </ListItemIcon>
            <ListItemText primary="Clients"/>
        </ListItemButton>

        <ListItemButton component={Link} >
            <ListItemIcon>
                <CodeIcon/>
            </ListItemIcon>
            <ListItemText primary="Projects"/>
        </ListItemButton>
        <ListItemButton component={Link} to="/Invoices">
            <ListItemIcon>
                <MoreTimeIcon/>
            </ListItemIcon>
            <ListItemText primary="Invoice"/>
        </ListItemButton>

    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>

    </React.Fragment>
);