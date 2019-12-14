import React from 'react';
import qr from '../images/dummy.png'


class QR extends React.Component{
    render(){
        return (

            <div id='qrs'>
                <h1>Available now</h1>

                <div className='qrContainer'>
                <h3>duelingo game</h3>    
                <img className='qr' src={qr} alt="dummy_QR"/>
                </div>

                <div className='qrContainer'>
                <h3>duelingo flashcard</h3>    
                <img className='qr' src={qr} alt="dummy_QR"/>
                </div>

               
            </div>

        

        );
    }

}


export default QR;