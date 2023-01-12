import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const Chart = (props) => {
    const data = []
    const fill = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d']
    props.data.forEach((i, index) => {
        const j = props.legend[index]
        const f = fill[index]
        data.push({ name: j, val: i, fill: f })
    });

    return (

        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" barSize={60} data={data}>
                <RadialBar
                    minAngle={20}
                    label={{ position: 'insideStart', fill: 'black' }}
                    background
                    clockWise
                    dataKey="val"
                />
                <Legend
                    payload={
                        data.map(
                            (item, index) => ({
                                id: item.name,
                                type: "square",
                                value: `${item.name} (${item.val})`,
                                color: item.fill
                            })
                        )
                    }
                    verticalAlign="top"
                />
            </RadialBarChart>
        </ResponsiveContainer>

    );

}
export default Chart