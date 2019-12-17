import React from 'react';
import qr1 from '../images/dummy.png'
import qr2 from '../images/flashcards.png'


class QR extends React.Component{
    render(){
        return (

            <div id='qrs'>
                <h1 id="qrtitile">Available now</h1>

                <div className='qrContainer'>
                <h3>Let's play game!</h3>    
                <img className='qr' src={qr1} alt="game"/>
                </div>

                <div className='qrContainer'>
                <h3>Review with flashcards!</h3>    
                <img className='qr' src={qr2} alt="flashcards"/>
                </div>

               
            </div>

        

        );
    }

}


export default QR;