import fetchJsonp from 'fetch-jsonp';

async function fetchSongsFromAlbum({ albumId, songCount = 5 }) {
  const url = `https://itunes.apple.com/lookup?id=${albumId}&entity=song&limit=${songCount}`;

  try {
    const res = await fetchJsonp(url);
    const json = await res.json();
    const collection = json.results.splice(0, 1);

    return {
      collection: collection[0],
      songs: json.results
    }
  } catch (e) {
    console.error(e);
  }
}

export default fetchSongsFromAlbum;