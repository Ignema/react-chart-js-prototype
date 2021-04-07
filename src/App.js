import './App.css';
import BarChart from './components/BarChart/BarChart.js'
import LineChart from './components/LineChart/LineChart.js'

function App() {

  return (
    <div>
      <h1>Chart Catalog</h1>
      <h2>Chart 1</h2>
      <BarChart />
      <h2>Chart 2</h2>
      <LineChart />
    </div>
  );
}

export default App;
