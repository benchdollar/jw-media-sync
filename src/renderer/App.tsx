// import { ThemeProvider } from '@mui/system';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import MainFrame from './components/MainFrame';
// import MyTheme from './Theme';
// import './App.global.css';

export default function App() {
  return (
    <Router>
      <Switch>
        {/* <ThemeProvider theme={MyTheme}> */}
          <Route path="/" component={MainFrame} />
        {/* </ThemeProvider> */}
      </Switch>
    </Router>
  );
}
