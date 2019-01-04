import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import HomeComponent from './pages/Home';
import SettingsComponent from './pages/Settings';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3'
    },
  },
});

const App = () => (
  <Router>
    <div>
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route path="/home" component={HomeComponent} />
          <Route path="/settings" component={SettingsComponent} />
          <Redirect to="/home" />
        </Switch>
      </MuiThemeProvider>
    </div>
  </Router>
);

export default App;
