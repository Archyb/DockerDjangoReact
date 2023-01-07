
import {BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const Chart = (props) => {

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={props.data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                {props.legend.map(x=> (<Bar dataKey={x.dataKey} fill={x.fill}/>))}

            </BarChart>
        </ResponsiveContainer>
    );

}
export default Chart