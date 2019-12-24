import React from 'react'
// import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { TwitterTimelineEmbed} from 'react-twitter-embed';


class Twitter extends React.Component {
    render(){
        return(
            <div className="twitter">
             <h1>News</h1>
                <div id="twitterContainer">
                     <TwitterTimelineEmbed
                        className="twitter"
                        sourceType="profile"
                        screenName="lexi_verse"
                        // options={{
                        //     tweetLimit: "10",
                        //     width: "30%",
                        //     height: "30%"
                        //   }}
                     />
                </div>
            </div>
        );
    }

}

export default Twitter; 