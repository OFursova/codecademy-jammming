import React from 'react';
import Track from './Track';
import styles from '../styles/Playlist.module.css';

const Playlist = ({ playlist }) => {
  return (
    <div className={styles.Playlist}>
      <h2 className={styles.h2}>Playlist</h2>
      {playlist.map((track) => (
        <Track key={track.id} track={track} isPlaylistTrack />
      ))}
    </div>
  );
};

export default Playlist;