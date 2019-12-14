
import React, { Component } from 'react';
import { Player, ControlBar, PlaybackRateMenuButton } from "video-react";
import "video-react/dist/video-react.css"; // import css

class Videos extends Component {
    componentDidMount() {
      this.player.playbackRate = 1;
      this.forceUpdate();
    }
    render() {
      return (
           
          <div className="video">

              <div>
                  <h1>hello</h1>
              </div>

            <Player
            ref={c => {
                this.player = c;
            }}
            playsInline
            >
            <ControlBar>
                <PlaybackRateMenuButton order={7} rates={[2, 1.5, 1.0, 0.5]} />
            </ControlBar>
            <source
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                type="video/mp4"
                />
            </Player>

          </div>
 
        
      );
    }
  }

        export default Videos;
