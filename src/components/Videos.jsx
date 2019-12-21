import React from 'react';
import { Player, ControlBar, PlaybackRateMenuButton } from "video-react";
import "video-react/dist/video-react.css"; // import css

class Videos extends React.Component {
    componentDidMount() {
      this.player.playbackRate = 1;
      this.forceUpdate();
    }
    render() {
      return (
           
          <div className="video" id="videos">

              <div id="videoTitle">
                  <h1>Videos</h1>
              </div>
            <div id="game_container">
              <div id="game_video">
                    <Player
                    ref={c => {
                        this.player = c;
                    }}
                    playsInline
                    autoPlay='true'
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
                
            </div>
            <br/>
                <br/>
                <br/>
                <br/> <br/>
                <br/> <br/>
                <br/>
           


            <div id="flashcard_video_container">

              <div id="flashcard_video">
                    <Player
                    ref={c => {
                        this.player = c;
                    }}
                    playsInline
                    autoPlay='true'
                    >
                    <ControlBar>
                        <PlaybackRateMenuButton order={7} rates={[2, 1.5, 1.0, 0.5]} />
                    </ControlBar>
                    <source
                        src="https://lexiverse-videos.s3-ap-northeast-1.amazonaws.com/demo.mp4"
                        type="video/mp4"
                        />
                    </Player>
              </div>
                
            </div>

                <br/>
                <br/>
                <br/>

          </div>
 
        
      );
    }
  }

        export default Videos;
