import fetchJsonp from 'fetch-jsonp';

async function fetchArtistAlbuns({ artistId, albumCount = 3 }) {
  const url = `https://itunes.apple.com/lookup?id=${artistId}&entity=album&limit=${albumCount}`;
  try {
    const res = await fetchJsonp(url);
    const json = await res.json();
    return json.results;
  } catch (e) {
    console.error(e);
  }
}

export default fetchArtistAlbuns;