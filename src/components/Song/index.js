import React from 'react';
import Img from 'react-image';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import PreviewPlayer from '../PreviewPlayer';
import "./styles.css";

const Song = props => {
  const { trackName, artistName, artistId, artworkUrl60, previewUrl } = props.info;

  return (
    <div className="songContainer">
      <div className="songContainer__image">
        <Img className="songContainer__image--image" src={artworkUrl60} unloader={<Loading />} />
        <PreviewPlayer previewUrl={previewUrl} />
      </div>
      <div className="songContainer__info">
        <p className="songContainer__info--songTitle">{ trackName }</p>
        <Link 
          to={{
            pathname: `/artist/${artistId}`
          }}
        >
          {artistName}
        </Link>
      </div>
    </div>
  );
};

export default Song;