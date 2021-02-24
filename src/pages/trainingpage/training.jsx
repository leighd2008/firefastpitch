import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { goToVideo } from "../../redux/training/training.actions";

import "./training.scss";

import {
  selectTrainingVideos,
  selectVideoIndex
} from "../../redux/training/training.selectors";

const Training = ({ trainingVideos, goToVideo, videoIndex }) => {
  const { video } = trainingVideos[videoIndex];
  const { instructions } = trainingVideos[videoIndex];

  return (
    <div className="training">
      <h1 className="training-title"> Training Videos</h1>
      <div className="videodisplay">
        <div className="videolist">
          <ul>
            <li>Daily Workouts</li>
            <ul>
              <li className="videolinks" onClick={goToVideo.bind(this, 12)}>Tee Work
                <span className="instructions">

                </span>
              </li>
              <li className="videolinks" onClick={goToVideo.bind(this, 13)}>
                Shoulder Exercises for Fastpitch Softball Players
                </li>
              <li className="videolinks" onClick={goToVideo.bind(this, 14)}>
                  Foundation exercises for Fastpitch softball pitchers
                </li>
            </ul>
            <li>Training with Mike Candrea</li>
            <ul>
              <li className="videolinks" onClick={goToVideo.bind(this, 1)}>
                Throwing
              </li>
              <li className="videolinks" onClick={goToVideo.bind(this, 2)}>
                Fielding Fly Balls
              </li>
              <li className="videolinks" onClick={goToVideo.bind(this, 3)}>
                Fielding Groundballs
              </li>
              <li className="videolinks" onClick={goToVideo.bind(this, 4)}>
                Improving as a Catcher
              </li>
              <li className="videolinks" onClick={goToVideo.bind(this, 0)}>
                Pitching
              </li>
            </ul>
            <li>
              USA SOFTBALL Infield Position Play
              <ul>
                <li className="videolinks" onClick={goToVideo.bind(this, 5)}>
                  Introduction
                </li>
                <li className="videolinks" onClick={goToVideo.bind(this, 6)}>
                  ShortStop
                </li>
                <li className="videolinks" onClick={goToVideo.bind(this, 7)}>
                  Second Base
                </li>
                <li className="videolinks" onClick={goToVideo.bind(this, 8)}>
                  Receiving throws
                </li>
                <li className="videolinks" onClick={goToVideo.bind(this, 9)}>
                  Third Base
                </li>
                <li className="videolinks" onClick={goToVideo.bind(this, 10)}>
                  First Base
                </li>
              </ul>
            </li>
            <li>
              Warm Up Drills
              <ul>
                <li className="videolinks" onClick={goToVideo.bind(this, 11)}>
                  Warm Up Throwing
                </li>
              </ul>
            </li>
            {/* <li>
              Conditioning and Strength Training
              <ul>
                <li className="videolinks" onClick={goToVideo.bind(this, 13)}>
                  7 Shoulder Exercises  for Fastpitch Softball Players
                </li>
              </ul>
            </li> */}
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
              onClick={goToVideo.bind(this, videoIndex - 1)}
            >
              Previous
            </button>
            <button
              aria-label="next video"
              onClick={goToVideo.bind(this, videoIndex + 1)}
            >
              Next
            </button>
          </div>
            <div className="instructions">{instructions}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  trainingVideos: selectTrainingVideos,
  videoIndex: selectVideoIndex
});

const mapDispatchFromProps = dispatch => ({
  goToVideo: videoIndex => dispatch(goToVideo(videoIndex))
});

export default connect(mapStateToProps, mapDispatchFromProps)(Training);
