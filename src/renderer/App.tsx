/* eslint-disable global-require */

import { ThemeProvider } from '@mui/material/styles';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider as ReduxStoreProvider } from 'react-redux';
import { store } from './store/store';

import MainFrame from './components/MainFrame';
import MyTheme from './Theme';
import './App.global.css';

export default function App() {
  return (
    <ThemeProvider theme={MyTheme}>
      <ReduxStoreProvider store={store}>
        <Router>
          <Switch>
            <Route path="/" component={MainFrame} />
          </Switch>
        </Router>
      </ReduxStoreProvider>
    </ThemeProvider>
  );
}
