import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import fetchArtistInfo from '../../libs/fetchArtistInfo';
import "./styles.css";

export default class ArtistInfo extends Component {
  state = {
    result: {}
  }

  gotoArtistPage = () => {
    const { useSmall, history } = this.props;

    if (useSmall) {
      history.push()
    }
  }

  async componentDidMount() {
    try {
      const { artistId } = this.props;
      const result = await fetchArtistInfo(artistId);

      this.setState({
        result
      });
    } catch (e) {
      console.error(e);
    }
  }

  renderArtistName = () => {
    const { artistName, artistId } = this.state.result;
    const { useSmall } = this.props;
    if (useSmall) {
      return (
        <NavLink
          to={{
            pathname: `/artist/${artistId}`
          }}
          activeStyle={{
            fontWeight: 'bold',
            fontSize: '1rem',
            marginLeft: '0.5rem',
            marginTop: '0.5rem',
            marginBottom: '0.2rem',
            color: '#000'
          }}
        >
          {artistName}
        </NavLink>
      )
    }

    return (
      <p className="artistInfoContainer__artistName">{artistName}</p>
    )
  }

  render() {
    const { primaryGenreName } = this.state.result;
    const { useSmall } = this.props;

    return (
      <div className={`artistInfoContainer${useSmall ? 'Small' : ''}`}>
        { this.renderArtistName() }
        <p className="artistInfoContainer__artistGenre">{primaryGenreName}</p>
      </div>
    )
  }
}