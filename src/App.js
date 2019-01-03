import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Pagination from "material-ui-flat-pagination";
import './App.css';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import ArticleCard from './components/ArticleCard';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3'
    },
  },
});

/* Un composant de type fonction ne peut pas avoir de state
const App = () => {
  // searchQuery = ""
  // searchResults = []
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Header label="NewsApp" />
        <Searchbar />
        <ArticleCard title="Hello World" image="https://material-ui.com/static/images/cards/paella.jpg" summary="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like." text="Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."  />
      </div>
    </MuiThemeProvider>
  );
}
*/

class App extends Component {
  state = {
    query: null,
    page: 1,
    pageSize: 21,
    totalResults: 0,
    results: []
  }

  componentWillMount() {
    const url = "https://newsapi.org/v2/top-headlines?apiKey=21be749136074d0f86d8584ad081fe19&category=technology&pageSize=3&country=ma";
    fetch(url).then((response) => {
      response.json().then((value) => {
        this.setState({ results: value.articles, totalResults: value.totalResults });
      });
    });
  }

  onQueryChange = (event) => {
    this.setState({ query: event.target.value });
  }

  onSearch = () => {
    const url = "https://newsapi.org/v2/everything?q=" + this.state.query + "&sortBy=publishedAt&apiKey=21be749136074d0f86d8584ad081fe19&pageSize=" + this.state.pageSize + "&page=" + this.state.page;
    fetch(url).then((response) => {
      response.json().then((value) => {
        this.setState({ results: value.articles });
      });
    });
  }

  onNextPage = (event, offset) => {
    const page = (offset / this.state.pageSize) + 1;
    this.setState({ page: page });
    this.onSearch();
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Header label="NewsApp" />
          <Searchbar onChange={this.onQueryChange} onSearch={this.onSearch} />
          <Grid container justify="center">
            {this.state.results.map(item => (
              <ArticleCard
                title={item.title}
                image={item.urlToImage}
                summary={item.description}
                text={item.content}
                date={item.publishedAt}
              />
            ))}
          </Grid>
          {this.state.query && (
            <Pagination
              className="pagination"
              limit={this.state.pageSize}
              offset={(this.state.page - 1) * this.state.pageSize}
              total={this.state.totalResults}
              onClick={this.onNextPage}
              size="large"
            />
          )}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
