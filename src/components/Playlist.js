import React, { useState } from 'react';
import Track from './Track';
import styles from '../styles/Playlist.module.css';

const Playlist = ({ playlist, onRemoveFromPlaylist, onSavePlaylist }) => {
  const [name, setName] = useState('');
  const [playlistTitle, setPlaylistTitle] = useState('Playlist');

  const handleRenaming = (e) => {
    setPlaylistTitle(name);
    setName('');
  };

  const handleSavePlaylist = () => {
    const uris = playlist.map(track => track.uri);
    onSavePlaylist(uris);
  };

  return (
    <div className={styles.Playlist}>
      <h2 className={styles.h2}>{playlistTitle}</h2>
      <div className={styles.div}>
        <input 
        type="text" 
        placeholder='Rename to...'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles['Playlist-input']}
        />
        <button onClick={handleRenaming} className={styles['Playlist-button']}>EDIT</button>
      </div>
      {playlist.map((track) => (
        <Track key={track.id} track={track} isPlaylistTrack onRemove={() => onRemoveFromPlaylist(track.id)} />
      ))}
      {playlist.length > 0 && (
        <button onClick={handleSavePlaylist} className={styles['Playlist-save-button']}>
        SAVE PLAYLIST
      </button>
      )}
    </div>
  );
};

export default Playlist;