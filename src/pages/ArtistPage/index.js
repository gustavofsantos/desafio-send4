import React, { Component } from 'react';
import ArtistInfo from '../../components/ArtistInfo';
import ArtistAlbuns from '../../components/ArtistAlbuns';

export default class ArtistPage extends Component {

  state = {
    playing: false
  }

  render() {
    const { artistId } = this.props.match.params;

    return (
      <div>
        <ArtistInfo artistId={artistId} />
        <ArtistAlbuns artistId={artistId} />
      </div>
    );
  }
}