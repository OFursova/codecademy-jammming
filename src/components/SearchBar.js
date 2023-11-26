import React, { useState } from 'react';
import styles from '../styles/SearchBar.module.css';

import { tracks } from "../mocks/tracks.js";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Use the mock data for now
    onSearch(tracks);
  };
/*
  const handleSearch = async () => {
    try {
      // Perform the Spotify API search request
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${searchQuery}&type=track`,
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer YOUR_SPOTIFY_API_KEY',
            // Add other required headers as needed
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        const searchResults = data.tracks.items;

        // Call onSearch function from the parent with the searchResults
        onSearch(searchResults);
      } else {
        console.error('Failed to fetch data from Spotify API');
      }
    } catch (error) {
      console.error('An error occurred during the fetch operation', error);
    }
  };
*/
  return (
    <div className={styles.SearchBar}>
      <input
        type="text"
        placeholder="Enter search query"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles['SearchBar-input']}
      />
      <button onClick={handleSearch} className={styles['SearchBar-button']}>Search</button>
    </div>
  );
};

export default SearchBar;