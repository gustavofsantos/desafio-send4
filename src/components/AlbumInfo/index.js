import React from 'react';
import Img from 'react-image';

import "./styles.css";

const AlbumView = props => {
  const { collectionName, artistName, artworkUrl100, collectionPrice, currency, trackCount } = props.album;

  return (
    <div className="albumInfoContainer">
      <div className="albumInfoContainer__image">
        <Img src={artworkUrl100} />
      </div>
      <div className="albumInfoContainer__info">
        <p className="albumInfoContainer__info--albumName">{collectionName}</p>
        <p className="albumInfoContainer__info--artistName">{artistName}</p>

        <p className="albumInfoContainer__info--trackCount">{trackCount} {trackCount > 1 ? 'songs' : 'song'}</p>
        <p className="albumInfoContainer__info--price">{currency} {collectionPrice}</p>
      </div>
    </div>
  )
}

export default AlbumView;