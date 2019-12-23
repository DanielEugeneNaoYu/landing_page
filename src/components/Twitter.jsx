import React from 'react'
// import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


class Twitter extends React.Component {
    render(){
        return(
                <div id="twitterContainer">
                    <h1>News</h1>
                     <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="lexi_verse"
                        options={{
                            tweetLimit: "10",
                            width: "30%",
                            height: "30%"
                          }}
                     />
                </div>
        );
    }

}

export default Twitter; 