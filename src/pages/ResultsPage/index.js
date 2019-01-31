import React, { Component } from 'react';
import ArtistInfo from '../../components/ArtistInfo';
import Song from "../../components/Song";

import "./styles.css";

export default class ResultsPage extends Component {
  state = {
    artists: [],
    songs: []
  }

  filterSearchResults = (results) => {
    const artists = new Set();
    const songs = new Set();

    results.forEach(result => {
      if (result.kind === 'song') {
        artists.add(result.artistId);
        songs.add(result);
      }
    });

    return {
      artists: [...artists],
      songs: [...songs]
    };
  }

  renderArtists = (artists) => 
    artists.map((artist, index) => (
      <ArtistInfo
        key={index}
        artistId={artist}
        useSmall={true}
      />
    ));

  renderSongs = (songs) =>
    songs.map((song, index) => (
      <Song 
        key={index}
        info={song}
      />
    ))

  render() {
    const { artists, songs } = this.filterSearchResults(this.props.results);

    return (
      <div className="resultsPageContainer">
        <div className="resultsPageContainer__artistsContainer">
          { this.renderArtists(artists) }
        </div>
        <div>
          { this.renderSongs(songs) }
        </div>
      </div>
    )
  }
}