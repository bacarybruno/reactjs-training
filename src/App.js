import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Header from './components/Header';
import Searchbar from './components/Searchbar';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3'
    },
  },
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Header label="NewsApp" />
        <Searchbar />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
