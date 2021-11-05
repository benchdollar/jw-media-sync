import { ThemeProvider } from '@mui/material/styles';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import MainFrame from './components/MainFrame';
import MyTheme from './Theme';
import './App.global.css';

export default function App() {
  return (
    <ThemeProvider theme={MyTheme}>
      <Router>
        <Switch>
          <Route path="/" component={MainFrame} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
