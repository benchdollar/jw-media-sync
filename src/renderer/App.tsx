import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import MainFrame from './components/MainFrame';
// import './App.global.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainFrame} />
      </Switch>
    </Router>
  );
}
