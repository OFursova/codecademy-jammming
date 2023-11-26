import React from 'react';
import Tracklist from './Tracklist';
import '../styles/SearchResults.module.css';

const SearchResults = ({ results, onAddToPlaylist }) => {
  return (
    <div className="SearchResults">
      <h2>Search Results</h2>
      {results.length > 0 &&
        <Tracklist tracks={results} onAddToPlaylist={onAddToPlaylist} />
      }
    </div>
  );
};

export default SearchResults;