import React, { useState } from 'react';
import styles from '../styles/SearchBar.module.css';
import Spotify from '../services/spotify.js'

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    try {
      const searchResults = await Spotify.search(searchQuery);
      onSearch(searchResults);
    } catch (error) {
      console.error('An error occurred during the search operation', error);
    }
  };

  return (
    <div className={styles.SearchBar}>
      <input
        type="text"
        placeholder="Enter search query"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles['SearchBar-input']}
      />
      <button onClick={handleSearch} className={styles['SearchBar-button']}>SEARCH</button>
    </div>
  );
};

export default SearchBar;