import React, { Component } from 'react';
import { Grid, LinearProgress } from '@material-ui/core';
import Pagination from "material-ui-flat-pagination";
import Header from '../../components/Header';
import Searchbar from '../../components/Searchbar';
import ArticleCard from '../../components/ArticleCard';

class Home extends Component {
    state = {
        query: null,
        page: 1,
        pageSize: 21,
        totalResults: 0,
        results: [],
        loading: false,
    }

    componentWillMount() {
        const url = "https://newsapi.org/v2/top-headlines?apiKey=21be749136074d0f86d8584ad081fe19&category=technology&pageSize=3&country=ma";
        this.setState({ loading: true });
        fetch(url).then((response) => {
            response.json().then((value) => {
                this.setState({
                    results: value.articles || [],
                    totalResults: value.totalResults || 0,
                    loading: false
                });
            });
        });
    }

    onQueryChange = (event) => {
        this.setState({ query: event.target.value });
    }

    newSearch = () => {
        this.setState({ page: 1 }, this.onSearch);
    }

    onSearch = () => {
        const url = "https://newsapi.org/v2/everything?q=" + this.state.query + "&sortBy=publishedAt&apiKey=21be749136074d0f86d8584ad081fe19&pageSize=" + this.state.pageSize + "&page=" + this.state.page;
        this.setState({ loading: true });
        fetch(url).then((response) => {
            response.json().then((value) => {
                this.setState({
                    results: value.articles || [],
                    totalResults: value.totalResults || 0,
                    loading: false
                });
            });
        });
    }

    onNextPage = (_, offset) => {
        const page = (offset / this.state.pageSize) + 1;
        this.setState({ page: page }, this.onSearch);
    }

    render() {
        return (
            <div className="Home">
                <Header label="Home" />
                {this.state.loading === true && <LinearProgress color="secondary" />}
                <Searchbar onChange={this.onQueryChange} onSearch={this.newSearch} />
                <Grid container justify="center">
                    {this.state.results.map((item, index) => (
                        <ArticleCard
                            title={item.title}
                            image={item.urlToImage}
                            summary={item.description}
                            text={item.content}
                            date={item.publishedAt}
                            url={item.url}
                            key={'article' + index}
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
        );
    }
}

export default Home;
