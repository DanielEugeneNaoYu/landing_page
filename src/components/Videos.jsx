import React from 'react';
import { Player, ControlBar, PlaybackRateMenuButton } from "video-react";
import "video-react/dist/video-react.css";

class Videos extends React.Component {
    componentDidMount() {
      this.player.playbackRate = 1;
      this.forceUpdate();
    }
    render() {
      return (
        <div>
            <div id="videoTitle">
                <h1>What is LEXIVERSE ?</h1>
            </div>

            <div className="video vs" id="videos">
                <div className='video_containter vContainer'>
                        <div className='video_text vt' flexDirection="column" justifyContent="center">
                            <h2>GAME</h2>
                            <h4>A interactive Japanese language learning game with multiple fast-paced game modes to keep the player engaged!</h4>
                        </div>

                        <div className='video_player vp'　id="game_video">
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
                                    src="https://lexiverse-videos.s3-ap-northeast-1.amazonaws.com/game.mp4"
                                    type="video/mp4"
                                    />
                                </Player>
                        </div>
                </div>

                <div className='flashcard_container'>

                        <div className='flashcard_text' flexDirection="column">
                            <h2>Flashcards</h2>
                            <h4>Don't forget to check out the accompaying flashcard app to supplement the learning material! Comes with various types of queries, allowing the user to quickly narrow into their weak points!</h4>
                        </div>
                        <div className='video_player'　id="flashcard_video">
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
                                    src="https://lexiverse-videos.s3-ap-northeast-1.amazonaws.com/flashcard_demo.mp4"
                                    type="video/mp4"
                                    />
                                </Player>
                        </div>
                  </div>
             </div>
        </div>
      );
    }
  }
export default Videos;
