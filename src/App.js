import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import HomeComponent from './pages/Home';
import SettingsComponent from './pages/Settings';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF4A00'
    },
    secondary: {
      main: '#2196f3'
    }
  },
});

const App = () => (
  <Router>
    <div>
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/home" component={HomeComponent} />
          <Route exact path="/settings" component={SettingsComponent} />
          <Redirect to="/home" />
        </Switch>
      </MuiThemeProvider>
    </div>
  </Router>
);

export default App;
