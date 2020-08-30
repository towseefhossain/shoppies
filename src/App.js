import React, {setState} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Nominations from './components/Nominations'

const API = "http://www.omdbapi.com/?apikey=b83a24c7"


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      searchresults : [],
      nominations : []
    }
    this.setResults = this.setResults.bind(this)
    this.addNomination = this.addNomination.bind(this)
    this.removeNomination = this.removeNomination.bind(this)
    this.shouldDisableAddButton = this.shouldDisableAddButton.bind(this)
  }

  setResults(results) {
    fetch(API + "&s=" + results + "&type=movie")
    .then(response => response.json())
    .then(data => this.setState({searchresults: data.Search}))
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
    this.setState({nominations: checked});
  }

  shouldDisableAddButton(item) {
    return ((this.state.nominations.indexOf(item) > -1) || (this.state.nominations.length >= 5))
  }

  componentDidMount() {
    fetch(API + "&s=Rambo&type=movie")
    .then(response => response.json())
    .then(data => this.setState({searchresults: data.Search}))
  }

  render() {
    return (
      <div className="App" >
        <SearchBar setResults={this.setResults}/>
        <div className="content-wrap">
          <SearchResults results={this.state.searchresults} addNomination={this.addNomination} shouldDisableAddButton={this.shouldDisableAddButton}/>
          <Nominations nominations={this.state.nominations} removeNomination={this.removeNomination}/>
        </div>
      </div>
    );
  }
  
}

export default App;
