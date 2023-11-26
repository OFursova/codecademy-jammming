import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [savedPlaylists, setSavedPlaylists] = useState([]);

  const handleSearch = (searchTerm) => {
    setSearchResults(searchTerm);
  };

  const addTrackToPlaylist = (track) => {
    if (! playlist.some((prevTrack) => prevTrack.id === track.id)) {
      setPlaylist([...playlist, track]);
    }
  };

  const removeTrackFromPlaylist = (trackId) => {
    setPlaylist(playlist.filter((track) => track.id !== trackId));
  };

  const onSavePlaylist = (trackUris) => {
    console.log('Saving playlist with URIs:', trackUris);

    setSavedPlaylists([...savedPlaylists, playlist]);
    
    setPlaylist([]);
  };


  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <div className="App-container">
        <SearchResults
          results={searchResults}
          onAddToPlaylist={addTrackToPlaylist}
        />
         <Playlist
          playlist={playlist}
          onRemoveFromPlaylist={removeTrackFromPlaylist}
          onSavePlaylist={onSavePlaylist}
        />
      </div>
    </div>
  );
}

export default App;
