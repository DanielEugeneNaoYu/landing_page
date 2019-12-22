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
                            <Flexbox className='video_text' flexDirection="column">
                                <h2>GAME</h2>
                                <h4>interactive and fast paced game that will test gaming and language ability</h4>
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
                                <h4>accompanying flashcard app to supplement learning</h4>
                            </Flexbox>
                    </Flexbox>
            </Flexbox>
        </div>
      );
    }
  }
export default Videos;
