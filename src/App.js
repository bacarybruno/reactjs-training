import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import './App.css';
// import Settings from './pages/Settings';
import Home from './pages/Home';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3'
    },
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <div className="App">
      <Home />
    </div>
  </MuiThemeProvider>
);

export default App;
