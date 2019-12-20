import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed';


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