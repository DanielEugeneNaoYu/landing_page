import React from 'react';
import { Player, ControlBar, PlaybackRateMenuButton } from "video-react";
import "video-react/dist/video-react.css"; // import css
import Flexbox from 'flexbox-react';

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

                <Flexbox className="video" id="videos" flexDirection='column' alignItems='center'>
                
                    <Flexbox className='video_containter'>
                            <Flexbox className='video_text' flexDirection="column" justifyContent="center">
                                <h2>GAME</h2>
                                <h4>A interactive Japanese language learning game with multiple fast-paced game modes to keep the player engaged!</h4>
                            </Flexbox>

                            <Flexbox className='video_player'　id="game_video">
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
                            </Flexbox>
                    </Flexbox>


                    <Flexbox className='flashcard_container'>

                            <Flexbox className='video_player'　id="flashcard_video">
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
                            </Flexbox>
                            <Flexbox className='flashcard_text' flexDirection="column">
                                <h2>Flashcards</h2>
                                <h4>Don't forget to check out the accompaying flashcard app to supplement the learning material! Comes with various types of queries, allowing the user to quickly narrow into their weak points!</h4>
                            </Flexbox>
                    </Flexbox>
            </Flexbox>
        </div>
      );
    }
  }
export default Videos;
