import {clientColumns} from "./ClientColumn";
import GridGenric from "../GridGenric";

const ClientTab = (props) => {
    return (
        <GridGenric rows={props.rows} columns={clientColumns}/>
    )
}

export default ClientTab;




