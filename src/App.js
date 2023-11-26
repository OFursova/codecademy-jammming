import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const addTrackToPlaylist = (track) => {
    setPlaylist([...playlist, track]);
  };

  const handleSearch = (searchQuery) => {
    setSearchResults(searchQuery);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <div className="App-container">
        <SearchResults
          results={searchResults}
          onAddToPlaylist={addTrackToPlaylist}
        />
        <Playlist playlist={playlist} />
      </div>
    </div>
  );
}

export default App;
