import Chart from 'react-google-charts';

const ChartComponent = ({ dataCharts }) => {

    const dataChart = [["", ""]];
    let totalParticipacoes = 0;

    dataCharts.forEach(element => {
        dataChart.push([`${element.name}`, element.participation])

        totalParticipacoes += element.participation;
    });

    if (totalParticipacoes < 100) {
        dataChart.push([`Porcentagem livre`, 100 - totalParticipacoes]);
    }


    console.log(totalParticipacoes);

    const config = {
        data: dataChart,
        options: {
            title: 'Gráfico de Participações',
            pieHole: 0.5,
            is3D: false,
        },
    };

    return (
        <Chart
            chartType="PieChart"
            data={config.data}
            options={config.options}
            width={"100%"}
            height={"400px"}
        />
    );
}

export default ChartComponent;