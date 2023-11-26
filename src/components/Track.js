import React from 'react';
import styles from '../styles/Track.module.css';

const Track = ({ track, onAddToPlaylist, isPlaylistTrack, onRemove }) => {
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
      <button className={styles.addButton} onClick={handleAddToPlaylist}>ADD</button>
      )}
      {isPlaylistTrack && (
        <button className={styles.removeButton} onClick={onRemove}>REMOVE</button>
      )}
    </div>
  );
};

export default Track;