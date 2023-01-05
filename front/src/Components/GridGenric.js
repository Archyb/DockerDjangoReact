import {DataGrid, GridToolbar} from "@mui/x-data-grid";
import Container from "@mui/material/Container";
import {useEffect, useState} from "react";

export default function GridGenric(props) {

    const [id, setId] = useState(0);

    useEffect(() => {

    }, );
    return (
        <Container style={{height: 300, width: '100%'}}>

            <DataGrid components={{Toolbar: GridToolbar}}
                      getRowId={(row) => row.id}
                      rows={props.rows}
                      columns={props.columns}
                      pageSize={10}
                      rowsPerPageOptions={[10]}
                      onRowClick={(e) => setId(e.row.id)}
            />

        </Container>
    );
}