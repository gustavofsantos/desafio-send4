import fetchJsonp from 'fetch-jsonp';

/**
 * Return the informations from a artist
 * @param {string|number} artistId Identification number of a artist
 */
async function fetchArtistInfo(artistId) {
  const url = `https://itunes.apple.com/lookup?id=${artistId}`;

  try {
    const res = await fetchJsonp(url);
    const json = await res.json();
    return json.results[0];
  } catch (e) {
    console.error(e);
  }
}

export default fetchArtistInfo;