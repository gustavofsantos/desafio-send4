import fetchJsonp from 'fetch-jsonp';
/**
 * Fetch the results by searching for string
 * @param {string} search String to search
 * @param {object} config Properties to make queries
 * @param {number} config.limit Number of items to return
 */
async function fetchSearch(search, config) {
  let url = `https://itunes.apple.com/search?term=${encodeURI(search.replace(' ', '+'))}`;
  if (config && config.limit) {
    url += `&limit=${config.limit}`;
  }

  try {
    const res = await fetchJsonp(url);
    const json = await res.json();
    return json;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export default fetchSearch;