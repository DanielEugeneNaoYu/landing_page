import React from 'react';
import qr1 from '../images/game_qr.png'
import qr2 from '../images/googleplay_qr.png'
import Flexbox from 'flexbox-react';


class QR extends React.Component{
    render(){
        return (

        <Flexbox id='qrs' flexDirection="column">
                <h1 id="qrtitile">Available now</h1>
            <Flexbox justifyContent="center">
                <div className='qrContainer'>
                    <h3>GAME</h3>    
                    <img className='qr' src={qr1} alt="game"/>

                    <div id="download_game">
                        <a href="https://eugenekim000.itch.io/lexiverse?secret=7UDKGcV6CucOZoqcNY0asOqbV0">
                             <button className="btn"><i className="fa fa-download"></i> Download</button>
                        </a>
                    </div>

                
                </div>

                <div className='qrContainer'>
                    <h3>FLASHCARDS</h3>    
                    <img className='qr' src={qr2} alt="flashcards"/>
              
                   
                    　　 <a href='https://play.google.com/store/apps/details?id=com.cc10.duelingoflashcard.duelingo_flashcard&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                            <img alt='Get it on Google Play' id="googleplay_logo" src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
                        </a>
                
                </div>

            </Flexbox>

            


            

        </Flexbox>



        

        );
    }

}


export default QR;