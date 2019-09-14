import React, { Component } from "react";
import { trainingVideos } from "./trainingVideos";
import "./training.scss";

class Training extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoIndex: 0
    };
  }

  goToVideo(index) {
    let videoIndex = index;
    if (videoIndex < 0) {
      videoIndex = trainingVideos.length - 1;
    } else if (videoIndex >= trainingVideos.length) {
      videoIndex = 0;
    }
    this.setState({
      videoIndex
    });
  }

  render() {
    const { video } = trainingVideos[this.state.videoIndex];
    return (
      <div className="training">
        <h1> Training Videos</h1>
        <div className="videodisplay">
          <div className="videolist">
            <ul>
              <li>Training with Mike Candrea</li>
              <ul>
                <li
                  className="videolinks"
                  onClick={this.goToVideo.bind(this, 0)}
                >
                  Throwing
                </li>
                <li
                  className="videolinks"
                  onClick={this.goToVideo.bind(this, 1)}
                >
                  Fielding Fly Balls
                </li>
                <li
                  className="videolinks"
                  onClick={this.goToVideo.bind(this, 2)}
                >
                  Fielding Groundballs
                </li>
                <li
                  className="videolinks"
                  onClick={this.goToVideo.bind(this, 3)}
                >
                  Improving as a Catcher
                </li>
                <li
                  className="videolinks"
                  onClick={this.goToVideo.bind(this, 4)}
                >
                  Pitching
                </li>
              </ul>
              <li>
                USA SOFTBALL Infield Position Play
                <ul>
                  <li
                    className="videolinks"
                    onClick={this.goToVideo.bind(this, 5)}
                  >
                    Introduction
                  </li>
                  <li
                    className="videolinks"
                    onClick={this.goToVideo.bind(this, 6)}
                  >
                    ShortStop
                  </li>
                  <li
                    className="videolinks"
                    onClick={this.goToVideo.bind(this, 7)}
                  >
                    Second Base
                  </li>
                  <li
                    className="videolinks"
                    onClick={this.goToVideo.bind(this, 8)}
                  >
                    Receiving throws
                  </li>
                  <li
                    className="videolinks"
                    onClick={this.goToVideo.bind(this, 9)}
                  >
                    Third Base
                  </li>
                  <li
                    className="videolinks"
                    onClick={this.goToVideo.bind(this, 10)}
                  >
                    First Base
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="youtube">
            <div className="iframe-container">
              <iframe
                src={video}
                width="1425"
                height="559"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
              />
              <button
                aria-label="previous video"
                onClick={this.goToVideo.bind(this, this.state.videoIndex - 1)}
              >
                Previous
              </button>
              <button
                aria-label="next video"
                onClick={this.goToVideo.bind(this, this.state.videoIndex + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Training;
