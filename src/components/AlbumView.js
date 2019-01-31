import React, { Component } from 'react';
import Song from './Song';
import AlbumInfo from './AlbumInfo';
import fetchSongsFromAlbum from '../libs/fetchSongsFromAlbum';

export default class AlbumView extends Component {
  state = {
    album: {},
    songs: [],
    playing: false
  }

  async componentDidMount() {
    const { albumId } = this.props;
    const { collection, songs } = await fetchSongsFromAlbum({ albumId });

    this.setState({
      album: collection,
      songs
    });
  }

  render() {
    return (
      <div>
        {
          this.state.album ? 
            <AlbumInfo album={this.state.album} />
          :
            <div></div>
        }
        <div>
          {
            this.state.songs.map((song, index) => 
              <Song 
                key={index}
                info={song}
              />
            )
          }
        </div>
      </div>
    );
  }
}
