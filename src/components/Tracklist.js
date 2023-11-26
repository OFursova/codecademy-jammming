import React from 'react';
import Track from './Track';
import styles from '../styles/Tracklist.module.css';

const Tracklist = ({ tracks, onAddToPlaylist }) => {
  return (
    <div className={styles.Tracklist}>
      {tracks.map((track) => (
        <Track key={track.id} track={track} onAddToPlaylist={onAddToPlaylist} />
      ))}
    </div>
  );
};

export default Tracklist;