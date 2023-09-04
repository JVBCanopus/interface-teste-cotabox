import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import React from 'react';
import axios from 'axios';
import { baseURl } from './utils/baseUrl';
import Chart from './components/Chart';

function App() {
  const [data, setData] = React.useState([]);
  const [dataChart, setDataChart] = React.useState([]);
  const [refreshUI, setRefreshUI] = React.useState(false);

  const handleDataSubmit = async (newData) => {
    await axios.post(`${baseURl}/users`, newData).then((res) => {
      setRefreshUI((prevState) => !prevState);
    });
  };

  React.useEffect(() => {
    axios.get(`${baseURl}/users`).then((res) => {
      const response = res.data;

      console.log(response);
      setData(response);
      setDataChart(response);
    });
  }, [refreshUI])

  return (
    <>
      <Header onDataSubmit={handleDataSubmit} />

      <main>
        <h1>DATA</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

        <section className="container">
          <Table data={data} setRefreshUI={setRefreshUI} />
          <div className="chart">
            <Chart dataCharts={dataChart} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
