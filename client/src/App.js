import React, { setState } from 'react';
import { withRouter } from 'react-router-dom'
import './App.css';
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Nominations from './components/Nominations'
import Alert from './components/Alert';
import { AppProvider } from "@shopify/polaris";
import en from '@shopify/polaris/locales/en.json';
import Submit from './components/Submit';

const API = "//www.omdbapi.com/?apikey=b83a24c7"

const noResults = [
  {
    "Title": "Bad Request Error",
    "Year": "Please type in a valid string query",
    "imdbID": "404",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTI5Mjg1MzM4NF5BMl5BanBnXkFtZTcwNTAyNzUzMw@@._V1_SX300.jpg"
  },
]

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchresults: [],
      nominations: []
    }
    this.setResults = this.setResults.bind(this)
    this.addNomination = this.addNomination.bind(this)
    this.removeNomination = this.removeNomination.bind(this)
    this.shouldDisableAddButton = this.shouldDisableAddButton.bind(this)
    this.shouldShowAlert = this.shouldShowAlert.bind(this)
    this.setResults = this.setResults.bind(this)
    this.checkForBadQuery = this.checkForBadQuery.bind(this)
  }

  checkForBadQuery(response) {
    if (response.Response === "False") {
      throw ("Bad Request Error")
    }
    return response
  }

  setResults(results) {
    let searchQuery = API + "&s=" + escape(results) + "&type=movie"
    fetch(searchQuery)
      .then(response => response.json())
      .then(response => this.checkForBadQuery(response))
      .then(data => {
        this.setState({ searchresults: data.Search })
      })
      .catch(error => {
        this.setState(
          {
            searchresults: noResults
          }
        )
      }
      )
  }

  addNomination(nomination) {
    this.setState(prevState => ({
      nominations: [...prevState.nominations, nomination]
    }))
  }

  removeNomination(nomination) {
    var checked = this.state.nominations;
    var index = checked.indexOf(nomination)
    if (index > -1) {
      checked.splice(index, 1);
    }
    this.setState({ nominations: checked });
  }

  shouldDisableAddButton(item) {
    return ((this.state.nominations.indexOf(item) > -1) || (this.state.nominations.length >= 5) || item.imdbID === "404")
  }

  shouldShowAlert() {
    return this.state.nominations.length >= 5
  }

  componentDidMount() {
    fetch(API + "&s=Rambo&type=movie")
      .then(response => response.json())
      .then(data => this.setState({ searchresults: data.Search }))
  }

  render() {
    return (
      <AppProvider i18n={en}>
        <div className="App" >
          <SearchBar setResults={this.setResults} />
          <Submit nominations={this.state.nominations} />
          <div className="content-wrap">
            <SearchResults results={this.state.searchresults} addNomination={this.addNomination} shouldDisableAddButton={this.shouldDisableAddButton} />
            <Nominations nominations={this.state.nominations} removeNomination={this.removeNomination} />
          </div>
          <Alert shouldShowAlert={this.state.nominations.length} nominations={this.state.nominations} />
        </div>
      </AppProvider>
    );
  }

}

export default withRouter(App);
