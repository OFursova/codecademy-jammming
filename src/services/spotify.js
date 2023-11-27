const Spotify = {
  accessToken: '',

  getAccessToken: async () => {
    if (Spotify.accessToken) {
      return Spotify.accessToken;
    }

    const clientId = 'client_id';
    const clientSecret = 'secret';

    try {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
      });

      if (response.ok) {
        const { access_token: accessToken, token_type: tokenType } = await response.json();
        console.log(`Token Type: ${tokenType}, Access Token: ${accessToken}`);

        Spotify.accessToken = accessToken;
        return accessToken;
      } else {
        console.error('Failed to fetch Spotify token:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('An error occurred during the fetch operation', error);
    }
  },

  search: async (query) => {
    const token = await Spotify.getAccessToken();

    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${query}&type=track`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();

        const searchResults = data.tracks.items.map((track, index) => ({
          id: index,
          name: track.name,
          album: track.album.name,
          artist: track.artists[0].name,
          uri: track.uri
        }));

        return searchResults;
      } else {
        console.error('Failed to fetch data from Spotify API');
      }
    } catch (error) {
      console.error('An error occurred during the fetch operation', error);
    }
  },
};

export default Spotify;
