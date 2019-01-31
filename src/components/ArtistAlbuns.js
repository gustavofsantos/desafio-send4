import React, { Component } from 'react';
import fetchArtistAlbuns from '../libs/fetchArtistAlbuns';
import AlbumView from './AlbumView';

export default class ArtistAlbuns extends Component {

  state = {
    albums: []
  }

  async componentDidMount() {
    const { artistId } = this.props;

    try {
      const res = await fetchArtistAlbuns({ artistId });

      let albums = [];
      for (let i = 1; i < res.length; i++) {
        albums.push(res[i]);
      }
  
      this.setState({
        albums
      });
    } catch (e) {
      console.error(e);
    }
  }

  render() {

    return (
      <div>
        {
          this.state.albums.map((album, index) => (
            <AlbumView
              key={index} 
              albumId={album.collectionId}
            />
          ))
        }
      </div>
    );
  }
}