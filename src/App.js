import logo from "./logo.svg";
import dailyProgress from './daily_progress_data.json';
import "./App.scss";

import Exercises from './Components/Exercises/Exercises';
import ProgressEvaluation from './Components/ProgressEvaluation/ProgressEvaluation';

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <img src={ logo } alt="logo" />
          <h1>Daily Overview</h1>
        </div>
        <ProgressEvaluation data={ dailyProgress } />
        <Exercises data={ dailyProgress } />
      </div>
    </div>
  );
}

export default App;
