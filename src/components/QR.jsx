import React from 'react';
import qr from '../images/dummy.png'


class QR extends React.Component{
    render(){
        return (

            <div id='qrs'>
                <h1 id="qrtitile">Available now</h1>

                <div className='qrContainer'>
                <h3>Let's play game!</h3>    
                <img className='qr' src={qr} alt="dummy_QR"/>
                </div>

                <div className='qrContainer'>
                <h3>Review with flashcards!</h3>    
                <img className='qr' src={qr} alt="dummy_QR"/>
                </div>

               
            </div>

        

        );
    }

}


export default QR;