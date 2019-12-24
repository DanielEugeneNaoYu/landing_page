import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {MediaQuery, SmartPhoneContents, PCContents} from "react-responsive";

class Navbar extends React.Component{
    render(){
        return(
            <div id="navbar">

            {/* <MediaQuery query="(max-width: 767px)">
                <SmartPhoneContents />
            </MediaQuery>
            <MediaQuery query="(min-width: 767px)">
                <PCContents />
            </MediaQuery> */}

                <AnchorLink href="#qrs">
                    <p className='inline-block-element'>Downloads</p>
                    </AnchorLink>
                <AnchorLink href="#twitterContainer">
                    <p className='inline-block-element'>News</p>
                </AnchorLink>
                <AnchorLink href="#videos">
                    <p className='inline-block-element'>About</p>
                </AnchorLink>
            </div>
        );
    }
}

export default Navbar;