import React from 'react'

class Twitter extends React.Component {
    render(){
        return(
                <div id="twitterContainer">
                    <a class="twitter-timeline" href="https://twitter.com/home?ref_src=twsrc%5Etfw">Tweets by home</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

                </div>
        );
    }

}

export default Twitter; 