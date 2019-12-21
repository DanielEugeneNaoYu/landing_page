import React from 'react';
import qr1 from '../images/dummy.png'
import qr2 from '../images/flashcards.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'


class QR extends React.Component{
    render(){
        return (

            <div id='qrs'>
                <h1 id="qrtitile">Available now</h1>

                <div className='qrContainer'>
                    <h3>Let's play game!</h3>    
                    <img className='qr' src={qr1} alt="game"/>

                    <div id="download_game">
                        <a href="https://eugenekim000.itch.io/lexiverse">
                             <button className="btn"><i className="fa fa-download"></i> Download</button>
                        </a>
                    </div>

                    <AnchorLink href="#game_video">
                        <button className="btn　"><i className="fa fa-download"></i> Demo</button>
                    </AnchorLink>
                </div>

                <div className='qrContainer'>
                    <h3>Review with flashcards!</h3>    
                    <img className='qr' src={qr2} alt="flashcards"/>
              
                    <div id="googleplay_logo">
                    　　 <a href='https://play.google.com/store/apps/details?id=com.cc10.duelingoflashcard.duelingo_flashcard&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
                    </div>

                    <AnchorLink href="#flashcard_video">
                        <button className="btn　"><i className="fa fa-download"></i> Demo</button>
                    </AnchorLink>
                </div>

            </div>

        

        );
    }

}


export default QR;