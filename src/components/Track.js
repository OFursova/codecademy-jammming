import React from 'react';
import styles from '../styles/Track.module.css';

const Track = ({ track, onAddToPlaylist, isPlaylistTrack }) => {
  const handleAddToPlaylist = () => {
    // Call onAddToPlaylist function from the parent with the track
    onAddToPlaylist(track);
  };

  return (
    <div className={styles.Track}>
      <div className={styles.info}>
        <p className={styles.name}>{track.name}</p>
        <p className={styles.artist}>{track.artist}</p>
        <p className={styles.album}>{track.album}</p>
      </div>
      {!isPlaylistTrack && (
      <button className={styles.button} onClick={handleAddToPlaylist}>Add to Playlist</button>
      )}
    </div>
  );
};

export default Track;