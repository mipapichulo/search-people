import React from 'react';
import Home from './pages/Home';
import { 
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom';
import ResultsRouter from './routes/results';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <ResultsRouter />
          <Route> <div>404</div> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
