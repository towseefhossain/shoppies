import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Nominations from './components/Nominations'


function App() {
  return (
    <div className="App" >
      <SearchBar/>
      <div className="content-wrap">
        <SearchResults/>
        <Nominations/>
      </div>
    </div>
  );
}

export default App;
