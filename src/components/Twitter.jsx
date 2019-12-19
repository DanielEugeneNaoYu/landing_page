import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


class Twitter extends React.Component {
    render(){
        return(
                <div id="twitterContainer">
                     <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="lexi_verse"
                        options={{width: 570, height: 400}}
                     />
                </div>
        );
    }

}

export default Twitter; 