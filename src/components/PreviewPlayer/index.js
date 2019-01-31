import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import { connect } from 'react-redux';
import 'react-circular-progressbar/dist/styles.css';
import Icon from '../PlayPauseIcon';

import './styles.css';

function mapState(state) {
  return {
    permissionToPlay: state.permissionToPlay,
    permissionUrl: state.permissionUrl
  }
}

class PreviewPlayer extends Component {
  state = {
    playing: false,
    progress: 0
  }

  togglePlay = () => {
    const { previewUrl } = this.props;
    this.pausePlaying();

    if (!this.state.playing) {
      // stopo who are playing
      this.props.dispatch({
        type: 'PLAY',
        permissionUrl: previewUrl
      });

      this.startPlaying();
    }

    this.setState({
      playing: !this.state.playing
    })
  }

  onEnd = () => {
    this.setState({
      playing: false,
      progress: 0
    });
  }

  onProgress = () => {
    const progress = Math.floor(Math.floor(this.audio.currentTime) / Math.floor(this.audio.duration) * 100)
    this.setState({
      progress
    })
  }

  startPlaying = () => {
    if (this.audio) {
      this.audio.play();
    }
  }
  
  canStartPlaying = () => {
    if (this.state.playing) {
      this.setState({
        playing: false
      });
    }
  }
  
  pausePlaying = () => {
    if (this.audio) {
      this.audio.pause();
    }
  }

  componentDidMount() {
    this.audio = new Audio(this.props.previewUrl);
    this.audio.onended = this.onEnd;
    this.audio.ontimeupdate = this.onProgress;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.previewUrl !== nextProps.permissionUrl && this.audio && this.audio.readyState) {
      this.pausePlaying();
      this.canStartPlaying();
    }
  }

  render() {
    return (
      <div className="previewPlayerContainer">

        <CircularProgressbar 
          percentage={this.state.progress} 
          strokeWidth={6}
          styles={{
            path: {
              stroke: '#13C083'
            }
          }}
        />
        <div className="previewPlayerContainer__button" onClick={this.togglePlay}>
          <Icon width="30px" height="30px" />
        </div>
      </div>
    )
  }
}

export default connect(mapState)(PreviewPlayer);